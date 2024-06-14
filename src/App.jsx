import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PersistLogin from './components/Auth/PersistLogin';
import RequiredAuth from './components/Auth/RequiredAuth';
import { LoginPage } from './pages/Login/User';
import { LoginAdminPage } from './pages/Login/Admin';
import { RegisterPage } from './pages/Register';
import { UserPage } from './pages/Dashboard/User';
import { AdminPage } from './pages/Dashboard/Admin';
import { ProfilePage } from './pages/Profile';
import { DestinationPage } from './pages/Dashboard/User/Destination';
import { BuyTicketPage } from './pages/Dashboard/User/BuyTicket';
import { DetailPageUser } from './pages/Dashboard/User/DetailDestination';
import { DetailPageAdmin } from './pages/Dashboard/Admin/DetailDestination';
import { ReservationPage } from './pages/Dashboard/User/Reservation';
import { AddPage } from './pages/Dashboard/Admin/AddDestination';
import { EditPage } from './pages/Dashboard/Admin/EditDestination';
import { DataUserPage } from './pages/Dashboard/Admin/DataUser';
import { EditUserPage } from './pages/Dashboard/Admin/EditUser';
import { DataReservationPage } from './pages/Dashboard/Admin/DataReservation';
import { NotFoundPage } from './pages/NotFound';
import PasswordUpdatePage from './pages/Profile/UpdatePassword/PasswordUpdatePage';
import NavAdmin from './pages/Dashboard/Admin/components/NavAdmin';
import NavUser from './pages/Dashboard/User/components/NavUser';
import Footer from './components/Dashboard/Footer';
import useAuth from './hooks/useAuth';
import Loading from './components/Loading';

function App() {
  const { auth } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const hideNavPaths = [
    '/buy-ticket',
    '/add-destination',
    '/edit-destination',
    '/login',
    '/login/admin',
    '/register',
  ];

  const shouldHideNav = hideNavPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideNav && (
        <>
          {auth?.role === 'ADMIN' && <NavAdmin />}
          {auth?.role === 'USER' && <NavUser />}
        </>
      )}
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/admin" element={<LoginAdminPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequiredAuth allowedRoles={['USER']} />}>
              <Route path="/" element={<UserPage />} />
              <Route path="/destination" element={<DestinationPage />} />
              <Route
                path="/detail-destination/:id"
                element={<DetailPageUser />}
              />
              <Route path="/buy-ticket/:id" element={<BuyTicketPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
            </Route>

            <Route element={<RequiredAuth allowedRoles={['ADMIN']} />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/data-user" element={<DataUserPage />} />
              <Route path="/add-destination" element={<AddPage />} />
              <Route path="/edit-destination/:id" element={<EditPage />} />
              <Route path="/edit-user/:id" element={<EditUserPage />} />
              <Route
                path="/data-reservation"
                element={<DataReservationPage />}
              />
              <Route
                path="/detail-destination-admin/:id"
                element={<DetailPageAdmin />}
              />
            </Route>

            <Route element={<RequiredAuth allowedRoles={['USER', 'ADMIN']} />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route
                path="/profile/update-password"
                element={<PasswordUpdatePage />}
              />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!shouldHideNav && <Footer />}
    </div>
  );
}

export default App;
