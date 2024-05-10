import React from 'react';
import { Route as MyRoute, Link } from './react-router-dom';
import Homeadd from './homeadd';
import Homeinfo from './homeinfo';

export default function home() {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          width: '200px',
          flexDirection: 'column ',
        }}
      >
        <Link to="/home/add">Homeadd</Link>
        <Link to="/home/info">Homeinfo</Link>
      </div>
      <div className="home-nav-content">
        <MyRoute path="/home/add" exact element={<Homeadd />} />
        <MyRoute path="/home/info" exact element={<Homeinfo />} />
      </div>
    </div>
  );
}
