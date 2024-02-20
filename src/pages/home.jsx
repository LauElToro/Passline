import React from "react";
import "../css/home.css"
import Carrucel1 from "../componentes/carrusel1";
import hero from "../../public/Hero.jpg"
export default function Home() {
    return(
        <>
        <section>
            <div className="Principal">
                <input type="search" name="search" placeholder="BUSCA EL EVENTO"/>
            </div>
            <div>
                <div className="divDone"></div>
                <Carrucel1/>
                <div  className="divDone2"></div>
            </div>
            <div className='d-flex aling-items-center justify-content-center mt-5'>
                <img className="w-100" src={hero} alt="" />
            </div>
        </section>
        </>
    )
}