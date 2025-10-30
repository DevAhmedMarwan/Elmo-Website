import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routers/Router.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </>
)


