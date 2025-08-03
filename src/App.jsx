import { Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow-1 p-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
