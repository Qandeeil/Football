import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import SignIn from './Screens/Registration/SignIn';
import SignUp from './Screens/Registration/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path='/Signin' element={<SignIn />}/>
          <Route path='/Registration' element={<SignUp />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
