import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

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
