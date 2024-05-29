import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequiredAuth from './components/RequiredAuth';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { HomePage } from './pages/Home';
import { NotFoundPage } from './pages/NotFound';
import UserPage from './pages/User/UserPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<RequiredAuth allowedRoles={['USER', 'ADMIN']} />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<RequiredAuth allowedRoles={['ADMIN']} />}>
          <Route path="/user" element={<UserPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
