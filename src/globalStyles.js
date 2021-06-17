import {createGlobalStyle} from  'styled-components';
import PrimaryFont from './utils/fonts/Hind-Light.woff'


const GlobalStyles = createGlobalStyle`
.Container_Cabeza{
 display: flex;
 width: 100%;
 height: 33.4vh;
 justify-content: space-between;
}
.ContainerText {
 display: flex;
 flex-direction: column;
 width: 50%;
 margin: 10px;
 font-family: Impact;
 font-size: 20px;
}
.ContainerText p {
 font-family: 'Hind';
 font-size: 25px;
 margin: 0 20px;
}

.ContainerImg{
 display: flex;
 width: 50%;
 margin-right: 10px;
 height: 100%;
 justify-content: center; 
} 
.ContainerImg Img{
 width: 100%;
 height: 100%;
 object-fit: contain;
}

.ContainerImg1{
 display: flex;
 width: 50%;
 margin-right: 10px;
 height: 100%;
 justify-content: center; 
}



// fuentes
@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}

//estilos para botones
button{
    border-radius: 20px;
    width: auto;
    height: 50px;
    font-size: 25px;
    font-family: 'Hind';
    margin: 0 20px;
}

button a{
    text-decoration: none;
    color: black;
}

/* responsive */

@media only screen and (min-width:768px) and (max-width:900px){
.ContainerImg1{
    width: 90%;
}
}
`;


/*
git remote add origin git@github.com:Juagarex/S-A-M.git
git branch -M main
git push -u origin main
*/ 

export default GlobalStyles