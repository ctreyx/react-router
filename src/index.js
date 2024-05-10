import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {
  HashRouter as MyRouter,
  Route as MyRoute,
  Link,
  Redirect,
  Routes as Switch, //react最新路由routes替代switch
} from './react-router-dom';
import Home from './home';
import User from './user';
import NotFound from './NotFound';
import './index.css';

/* 
  react路由改动:
  1.新版本routers取代siwtch
  2.component={home} 取代为 element={<Home />} 
*/

/* 手敲 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyRouter>
    <div>
      <div className="nav-wrap">
        <Link to="/">NotFound</Link>
        <Link to="/user">User</Link>
        <Link to="/home">home</Link>
      </div>

      <Switch>
        <MyRoute path="/home" element={<Home />} />
        <MyRoute path="/user" element={<User />} />
        <MyRoute path="/" element={<NotFound />} />
        <Redirect to="/" />
      </Switch>
    </div>
  </MyRouter>
);

/* 原版 */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/user" element={<User />} />
//     </Routes>
//   </Router>
// );
