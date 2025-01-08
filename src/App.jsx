// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register"; 
// import Barang from "./Components/Barang"; 
// import Detail from "./Components/Detail"; 
import LendingPage from "./Components/LendingPage";




const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/barang" element={<Barang />} /> */}
      {/* <Route path="/detail" element={<Detail />} /> */}
      <Route path="/lending" element={<LendingPage />} />
      
      

    </Routes>
  );
};

export default App;