import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/custom-bootstrap.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
const HomePage = lazy(() => import('./pages/HomePage'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutMe = lazy(() => import('./pages/AboutMe'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className='text-center p-5'>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'portfolio',
        element: (
          <Suspense fallback={<div className='text-center p-5'>Loading...</div>}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<div className='text-center p-5'>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'aboutme',
        element: (
          <Suspense fallback={<div className='text-center p-5'>Loading...</div>}>
            <AboutMe />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
