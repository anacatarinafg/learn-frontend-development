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
import Videos from "./components/Videos/Videos";
import Cheatsheets from "./components/Cheatsheets/Cheatsheets";

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
        <Route path="/videos" element={<Videos />} />
        <Route path="/cheatsheets" element={<Cheatsheets />} />
      </Routes>
    </Router>
  );
}

export default App;