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
import Tools from "./components/Tools/Tools";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Slideshow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;