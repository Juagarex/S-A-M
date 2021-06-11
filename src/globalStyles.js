import {createGlobalStyle} from  'styled-components';
import PrimaryFont from './utils/fonts/Hind-Light.woff'


const GlobalStyles = createGlobalStyle`
.Container_Cabeza{
 display: flex;
 width: 100%;
 height: 33.4vh;
 justify-content: space-between;
}
.ContainerText 
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
 width: 50%;
 height: 100%;
} 


// fuentes
@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
`;


export default GlobalStyles