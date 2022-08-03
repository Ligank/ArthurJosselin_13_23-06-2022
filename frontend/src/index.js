import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css';
import Accueil from './pages/Accueil';
import SignIn from './pages/sign-in';
import User from './pages/user';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import history from './store/history'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore}>
    <React.StrictMode>
        <Router history={history}>
          <Routes>
            <Route exact path="/" element={<Accueil />}></Route>

            <Route exact path="/login" element={<SignIn />}></Route>

            <Route exact path="/profile" element={<User />}></Route>
          </Routes>
        </Router>
    </React.StrictMode>
    </Provider>
);
