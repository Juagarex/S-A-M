import React from 'react' //Importar siempre react
import '../utils/CSS/Todo.estilos.css'
import {Link} from "react-router-dom"

function Title() {
    return (
        <div className="Container_title">
            <h1 id="principalTitle"> PROCESO DE TRANSLADAR CAJAS </h1>
            <Link to="/contact">
              <button> Me voy para Contact </button>
            </Link>
         <a href="#galeria"><button type="button" >Me voy para la seccion de galeria </button> </a>
       </div>
    )
}

export default Title