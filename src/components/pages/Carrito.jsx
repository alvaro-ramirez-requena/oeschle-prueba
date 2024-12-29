import { Link } from "react-router-dom"

const Carrito = () => {
    return (
        <>
            <div className="container-encabezado">
                <div className="encabezado">
                    <Link to="/"><img src="/src/images/imagen-oeschle.png" alt="logo-oeschle" /></Link>
                </div>
            </div>
            <main className="container-padre-carrito">
                <h2 className="title-carrito">Carrito de Compras</h2>
                <div className="container-carrito">
                    <div className="container-productos-carrito">
                        <div>Producto</div>
                        <div>Producto</div>
                        <div>Producto</div>
                    </div>
                    <div className="container-padre-carrito-precio">
                        <div className="container-carrito-precio">
                            <div className="resumen-compra">Resumen de la compra</div>
                            <div className="title-subtotal">Sub-total </div>
                            <div>Total</div>
                        </div>
                        <div className="container-boton-comprar">
                            <button>Ir a comprar</button>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Carrito