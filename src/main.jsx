import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Error from './pages/error.jsx';
import ServicesPage from './pages/services.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/services',
    element: <ServicesPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
