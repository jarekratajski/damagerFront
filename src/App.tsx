import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Debug} from "./components/debug/Debug";
import  "./styles/index.less";
import {MainController} from "./components/MainController";

function App() {
  return (
    <div className="App">
        <MainController/>
      <Debug></Debug>;
    </div>
  );
}

export default App;
