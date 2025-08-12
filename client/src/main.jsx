import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { ToastContainer} from 'react-toastify';
import AuthProviders from './providers/AuthProviders';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProviders>
     <QueryClientProvider client={queryClient}>
<div className='max-w-screen-xl mx-auto'>
        <ToastContainer />
       <RouterProvider router={router} />
     </div>
    </QueryClientProvider>
  </AuthProviders>
  </StrictMode>,
)
