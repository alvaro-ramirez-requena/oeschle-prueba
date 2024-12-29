import { useState } from "react"
import { Link } from "react-router-dom"

const MainMenu = () => {

    // const [array, setArray] = useState([])

    // const handleLogin = () => {
    //     setArray(["iniciar sesion", "pedidos"])
    // }


    return (
        <nav>
            <ul className="container-listas">
                <li><img src="src/images/imagen-menu.png" alt="menu" /></li>
                <li>
                    <input type="text" placeholder="Que estas buscando hoy?" className="input-busqueda" />
                </li>
                <li className="ubicacion"><img src="src/images/imagen-ubicacion.png" alt="ubicacion" /></li>
                <li className="login" id="login">
                    <Link to="/login"><img src="src/images/imagen-iniciar-sesion.png" alt="iniciar-sesion" /></Link>
                    {/* <div className="container-inicio">{array.map((m, index) => <div key={index} className="container-inicio-sesion" >{m}</div> )}</div> */}
                </li>
                <li><Link to="/carrito" className="carrito"><img src="src/images/imagen-carrito.png" alt="carrito" /></Link></li>
                {/* <div className="hide">
                    <p>inicio ss</p>
                    <p>pedidos</p>
                </div> */}
            </ul>
        </nav>
    )
}
export default MainMenu