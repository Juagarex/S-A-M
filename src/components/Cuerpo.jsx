import React from 'react' //Importar siempre react
import '../utils/CSS/Cuerpo.estilos.css'
import B1 from '../utils/img/B1.jpg'
const Cuerpo = () => {
    return (
      <div className="Container_Cuerpo">
	        <div className="ContainerText1">
	            <h1>EL QUE COMPONE EL CUERPO </h1>
	            <p>Lorem ipsum dolor sit, amet consectetur
	             adipisicing elit. Temporibus commodi impedit 
	             officiis, aliquam vero necessitatibus. 
	             Sunt quaerat cum expedita temporibus?</p>
	        </div>
	        <div className="ContainerImg1">
	          <img id="image1" src={B1} alt="hola esta es yuri" />
	        </div>
      </div>

    )
}
export default Cuerpo