import Logo from "./Logo"
import MainMenu from "./MainMenu"

const DetallesProducto = () => {
    return (
        <>
            <div className="container-encabezado">
                <div className="encabezado">
                    <Logo />
                    <MainMenu />
                </div>
            </div>
            <section className="container-padre-detalles-producto">
                <div>
                    <img src="/src/images/imagen-prueba-detalles.png" alt="" />
                </div>
                <div className="container-detalle-producto">
                    <p>Descripcion</p>
                    <div className="container-botones-detalle-producto">
                        <div>Contador</div>
                        <button className="container-boton-detalle-producto-comprar">Agregar al carro</button>

                    </div>
                </div>
            </section>

        </>
    )
}
export default DetallesProducto