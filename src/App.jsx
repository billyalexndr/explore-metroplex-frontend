import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginUser from './pages/LoginUser';
import RegisUser from './pages/RegisUser';

function App() {
  return (
    <>
     <Routes>
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<RegisUser />} />  
     </Routes>
    </>
  );
}

export default App;
