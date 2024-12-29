import { createRoot } from 'react-dom/client'
import router from './router/Router'
import { RouterProvider } from 'react-router-dom'
import "./styles/styles.css"

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>
)
