import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersistLogin from './components/Auth/PersistLogin';
import RequiredAuth from './components/Auth/RequiredAuth';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { HomePage } from './pages/Home';
import { NotFoundPage } from './pages/NotFound';
import UserPage from './pages/User/UserPage';
import { ProfilePage } from './pages/Profile';
import CreateTourPage from './pages/CreateTourPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequiredAuth allowedRoles={['USER', 'ADMIN']} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add" element={<CreateTourPage />} />
          </Route>

          <Route element={<RequiredAuth allowedRoles={['ADMIN']} />}>
            <Route path="/user" element={<UserPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
