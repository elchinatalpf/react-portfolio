import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/custom-bootstrap.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const AboutMe = lazy(() => import('./pages/resume/AboutMe'));

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
