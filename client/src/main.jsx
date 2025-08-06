import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { ToastContainer} from 'react-toastify';
import AuthProviders from './providers/AuthProviders';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProviders>
<div className='max-w-screen-xl mx-auto'>
        <ToastContainer />
       <RouterProvider router={router} />
     </div>
  </AuthProviders>
  </StrictMode>,
)
