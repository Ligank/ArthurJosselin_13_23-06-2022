import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css';
import Accueil from './pages/Accueil';
import SignIn from './pages/sign-in';
import User from './pages/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Accueil />}></Route>

        <Route exact path="/sign-in" element={<SignIn />}></Route>

        <Route exact path="/user" element={<User />}></Route>

      </Routes>
    </Router>
    
  </React.StrictMode>
);
