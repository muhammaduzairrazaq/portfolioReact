import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner></Banner>
      <Skills></Skills>
    </div>
  );
}

export default App;


