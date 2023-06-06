import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Slideshow from './components/Slideshow/Slideshow';
import Contact from './components/Contact/Contact';
import Resources from "./components/Resources/Resources";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Slideshow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;