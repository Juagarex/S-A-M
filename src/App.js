import logo from './utils/img/logo.svg'
import './App.css';
import Title from './components/Title.jsx';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import Todo from './components/Todo';
import GlobalStyles from './globalStyles.js';


function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <Title/>
    <Cuerpo/>
    <Footer/>
    <Todo/>

    </div>
  );
}

export default App;