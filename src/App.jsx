// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
// import Barang from './Components/Hero/hero';
// import Detail from './pages/Detail';
// import Edit from './pages/Edit';
// import Tambah from './pages/Tambah';
// import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />        
        {/* <Route path="/hero" element={<Hero />} /> 
        <Route path="/barang" element={<Barang />} /> */}
        {/* <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/tambah" element={<Tambah />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
