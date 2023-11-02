// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';
// import { createBrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavTabs from './components/Navigation';
// import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
    <Footer />
    </>
    
  );
}

export default App;
