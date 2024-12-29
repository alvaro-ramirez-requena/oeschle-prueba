// const MainAnuncioGrande = () => {
//     return(
//         <div className="container-anuncio-grande">
//             <img src="src/images/imagen-grande-main.png" alt="" />
//         </div>
//     )
// }
// export default MainAnuncioGrande

import { Productos } from "../../atoms/productos";

import { useState } from "react";
import "/src/styles/styles.css";

const MainAnuncioGrande = () => {

    const capture = Productos.data[0].image
    const images = capture.map(img => img.url)
    console.log(images)

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container-anuncio-grande">
            <button className="slider-btn prev" onClick={handlePrev}>
                &#9664;
            </button>
            <div className="slider-images">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <button className="slider-btn next" onClick={handleNext}>
                &#9654;
            </button>
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? "dot active" : "dot"}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default MainAnuncioGrande;