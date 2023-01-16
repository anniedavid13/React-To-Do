import React from 'react';
import { Header } from './components/header';
import './App.css';
import { Outlet } from 'react-router-dom';
import { db } from './firebase';
function App() {
  return (
    <div className="container">
      <Header />
      <main>
      <Outlet />
      </main>
      <footer>
        &copy; 2023
      </footer>
    </div>
  );
}

export default App;
