import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <div className="container-logo">
            <Link to="/"><img src="/src/images/imagen-oeschle.png" alt="logo-oeschle" /></Link>
        </div>
    )
}
export default Logo