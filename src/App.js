import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Slideshow from './components/Slideshow/Slideshow';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Slideshow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;