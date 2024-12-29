// import { Link } from "react-router-dom"

const MainProductos = () => {
    
    // const listarProductos = productos.map( (prod, index) => <div key={index}><Link to={`/detalles-producto/:${index}`}  ><img src={prod.url} alt="" /></Link></div>)    
    return (
        <div className="container-principal-productos">
            <div className="container-parrafo-productos">
                <p><b>Lo mas top</b> del Flash Sale</p>
            </div>
            <div className="container-productos"> 
                {/* {listarProductos}   */}
            </div>
        </div>
    )
}
export default MainProductos