import React from 'react' //Importar siempre react
import '../utils/CSS/Todo.estilos.css';
import B3 from '../utils/img/B3.jpg';
const Todo = () => {
    return (
     <div className="Container_Cabeza">
	        <div className="ContainerText">
	            <h1>EL QUE COMPONE TODO</h1>
	            <p>Lorem ipsum dolor sit amet consectetur, 
	            adipisicing, elit. Maiores debitis numquam aperiam 
	            impedit reiciendis eos tempora</p>
	        </div>
	        <div className="ContainerImg">
	          <img id="image1" src={B3} alt="hola esta es yuri" />
	        </div>
      </div>
    );
}
export default Todo