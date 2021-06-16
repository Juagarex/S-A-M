import React from 'react'
import imagen1 from '../utils/img/B1.jpg'
import imagen2 from  '../utils/img/B2.jpg'
import { Link } from 'react-router-dom'

function Galeria() {
    return (
        <div>
            <h1 name="galeria" id="galeria"> Seccion de galeria</h1>
             
            <div className="ContainerImages">
                <div className="Image1">
                    <img src={imagen1} alt="hola"  />
                </div>
                <div className="Image2">
                    <img src={imagen2} alt="hola"  />
                </div>
            </div>
            
        </div>
    )
}

export default Galeria
