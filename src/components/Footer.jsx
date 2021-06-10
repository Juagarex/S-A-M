import React from 'react' //Importar siempre react
import '../utils/CSS/Footer.estilos.css';
import B2 from '../utils/img/B2.jpg'
const Footer = () => {
    return (
       <div className="Container_footer">
	        <div className="ContainerText2">
	            <h1>EL QUE COMPONE EL FOOTER</h1>
	            <p>Lorem ipsum dolor sit, amet consectetur
	             adipisicing elit. Temporibus commodi impedit 
	             officiis, aliquam vero necessitatibus. 
	             Sunt quaerat cum expedita temporibus?</p>
	        </div>
	        <div className="ContainerImg2">
	          <img id="image2" src={B2} alt="hola esta es yuri" />
	        </div>
      </div>
    )
}
export default Footer