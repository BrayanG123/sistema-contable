import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//tailwindcss 
import './index.css';

import Modal from 'react-modal';

import { SistemaContableApp } from './SistemaContableApp';


Modal.setAppElement('#root');
const router = createBrowserRouter([

      {
        path: "*",
        element: <SistemaContableApp />,
      },],

      {
        future: {
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_relativeSplatPath: true,
          v7_skipActionErrorRevalidation: true,
        },
      }
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    {/* <MainApp /> */}
  </React.StrictMode>
);

