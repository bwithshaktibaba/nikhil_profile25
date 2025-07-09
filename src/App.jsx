import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/header';
import About from './componets/about';
import Skills from './componets/Skills';
import Projects from './componets/Projects';
import Contact from './componets/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
