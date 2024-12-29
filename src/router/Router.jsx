import {createBrowserRouter} from "react-router-dom"
import Home from "../components/pages/Home.jsx"
import Carrito from "../components/pages/Carrito.jsx"
import Error404 from "../components/pages/Error404.jsx"
import Login from "../components/pages/Login.jsx"
import DetallesProducto from "../components/moleculas/header/DetallesProducto.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement: <Error404/>
    },
    {
        path:"/carrito",
        element:<Carrito/>,
        errorElement: <Error404/>
    },
    {
        path:"/login",
        element:<Login/>,
        errorElement: <Error404/>
    },
    {
        path:"/detalles-producto/:id",
        element:<DetallesProducto/>,
        errorElement:<Error404/>
    }

])


export default router