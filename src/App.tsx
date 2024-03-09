import React from 'react';
import {Routes, Route, Link, BrowserRouter, } from 'react-router-dom';
import './App.css';
import { ListUser } from './components/ListUser';
import { CreateUser } from './components/CreateUser';
import { EditUser } from './components/EditUser';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <h5>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/'>List user</Link>
              </li>
              <li>
                <Link to='user/create'>Create user</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<CreateUser/>}/>
            <Route path='user/create' element={<CreateUser/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='user/authentication' element={<Login/>}/>
            <Route path='user/:id/edit' element={<EditUser/>}/>
          </Routes>
        </BrowserRouter>
      </h5>
    </div>
  );
}

export default App;
