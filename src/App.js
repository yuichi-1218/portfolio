import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';
import Work from './components/Work';
import Skill from './components/Skill';
import Others from './components/Others';



function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About />
      <Skill />
      <Work />
      <Others />
    </div>
  );
}

export default App;
