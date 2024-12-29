import { API_URL } from "../../constants/env"
import axios from "axios"
const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Formulario enviado")

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        // axios.post(`${API_URL}/users`, data)
        // .then(resp=>console.log(resp))
        // .catch(error=>console.log(error))
    }
    return (
        <div className="container-padre-formulario">
            <form onSubmit={handleSubmit} className="container-formulario">
                <h3 className="title-form">Iniciar sesion: </h3>
                <div className="container-input-1-form">
                    <label htmlFor="correo">Correo: </label><br />
                    <input type="text" name="email" placeholder="Correo electronico" required className="input-1-form" id="correo" />
                </div>
                <div className="container-input-2-form">
                    <label htmlFor="password">Contraseña: </label><br />
                    <input type="password" name="password" placeholder="Contrasenia" required className="input-2-form" id="password" />
                </div>
                <div className="container-boton-form">
                    <button type="submit" >Ingresar</button>
                </div>
            </form>
        </div>
    )
}

export default Login