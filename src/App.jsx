import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersistLogin from './components/Auth/PersistLogin';
import RequiredAuth from './components/Auth/RequiredAuth';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { UserPage } from './pages/Dashboard/User';
import { AdminPage } from './pages/Dashboard/Admin';
import { DestinationPage } from './pages/Dashboard/User/Destination';
import { BuyTicketPage } from './pages/Dashboard/User/BuyTicket';
import { DetailPage } from './pages/Dashboard/User/DetailDestination';
import { NotFoundPage } from './pages/NotFound';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequiredAuth allowedRoles={['USER']} />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/destination" element={<DestinationPage />} />
            <Route path="/detail-destination" element={<DetailPage />} />
            <Route path="/buy-ticket" element={<BuyTicketPage />} />
          </Route>

          <Route element={<RequiredAuth allowedRoles={['ADMIN']} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
