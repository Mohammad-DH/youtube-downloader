import React from 'react';
import './App.global.css';
import Input from './components/input';
import Loader from './components/loader';
import Panel from './components/panel';

import BG from '../../assets/BG6.jpg';
import logo from '../../assets/logo.png';

export default function App() {
  return (
    <div style={{ backgroundImage: `url(${BG})` }} className="App">
      <img className="logo" src={logo} alt="" />

      <Loader />
      <div className="content">
        <Input />
        <Panel />
      </div>
    </div>
  );
}
