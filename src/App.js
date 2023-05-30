import './App.css';
import { gsap } from 'gsap';
import Test from './components/test';
import Responsivetest from './components/responsivetest';

function App() {
  let timeline = gsap.timeline();
  return (
    <div>
      <Responsivetest timeline={timeline} />
      <Test timeline={timeline} />
    </div>
  );
}

export default App;