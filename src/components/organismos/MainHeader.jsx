import Logo from "../moleculas/header/Logo"
import MainMenu from "../moleculas/header/MainMenu"

const MainHeader = () => {
    return (
        <div className="container-encabezado">
            <div className="encabezado">
                <Logo />
                <MainMenu />
            </div>
        </div>
    )
}

export default MainHeader