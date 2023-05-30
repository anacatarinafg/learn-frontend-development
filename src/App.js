import './App.css';
import Slideshow from './components/Slideshow/Slideshow';
import Navbar from './components/Navbar/Navbar';
import Hamburger from './components/Hamburger/Hamburger';

function App() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Hamburger />
    </div>
  );
}

export default App;