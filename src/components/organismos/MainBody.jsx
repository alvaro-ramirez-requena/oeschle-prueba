import MainEncabezado from "../moleculas/header/MainEncabezado"
import MainAnuncioGrande from "../moleculas/header/MainAnuncioGrande"
import MainAnuncioLittle from "../moleculas/header/MainAnuncioLittle"
import MainSecciones from "../moleculas/header/MainSecciones"
import MainProductos from "../moleculas/header/MainProductos"
import MainShowSeccion from "../moleculas/header/MainShowSeccion"
import ShowRecomendados from "../moleculas/header/ShowRecomendados"

const MainBody = () => {
    return (
        <main className="container-main">
            <MainEncabezado/>
            <MainAnuncioGrande/>
            <MainAnuncioLittle/>
            <MainSecciones/>
            <MainProductos/>
            <MainShowSeccion/>
            <ShowRecomendados/>
        </main>
    )
}

export default MainBody