import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// bring here all the router pages
import App from './App';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 
//       },
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
