import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import { DetailPage } from './pages/Dashboard/User/DetailDestination';
import { ReservationPage } from './pages/Dashboard/User/Reservation';
import { AddPage } from './pages/Dashboard/Admin/AddDestination';
import { EditPage } from './pages/Dashboard/Admin/EditDestination';
import { DataUserPage } from './pages/Dashboard/Admin/DataUser';
import { EditUserPage } from './pages/Dashboard/Admin/EditUser';
import { DataReservationPage } from './pages/Dashboard/Admin/DataReservation';
import { NotFoundPage } from './pages/NotFound';
import PasswordUpdatePage from './pages/Profile/components/PasswordUpdatePage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/admin" element={<LoginAdminPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequiredAuth allowedRoles={['USER']} />}>
            <Route path="/" element={<UserPage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/detail-destination/:id" element={<DetailPage />} />
            <Route path="/buy-ticket/:id" element={<BuyTicketPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
          </Route>

          <Route element={<RequiredAuth allowedRoles={['ADMIN']} />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/add-destination" element={<AddPage />} />
            <Route path="/edit-destination/:id" element={<EditPage />} />
            <Route path="/data-user" element={<DataUserPage />} />
            <Route path="/edit-user/:id" element={<EditUserPage />} />
            <Route path="/data-reservation" element={<DataReservationPage />} />
          </Route>

          <Route element={<RequiredAuth allowedRoles={['USER', 'ADMIN']} />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/update-password" element={<PasswordUpdatePage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
