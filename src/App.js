import logo from './utils/img/logo.svg'
import './App.css';
import GlobalStyles from './globalStyles.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Contact from "./pages/Contact/Contact.jsx"
function App() {
  return (
    <div className="App">
    <Router>
    <GlobalStyles/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;