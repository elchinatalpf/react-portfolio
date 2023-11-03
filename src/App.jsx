import './App.css'
import { Outlet } from 'react-router-dom';

// NavBar will be call in header and then here Import Header

// import NavTabs from './components/Navigation';
import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
    <Footer />
    </>
    
  );
}

export default App;
