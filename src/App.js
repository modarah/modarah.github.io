import { Route, Routes } from "react-router-dom";
import { Navbar, Hero, Technologies, Projects, Footer, About, Datenschutz, Impressum} from './components';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="section-divider" style={{marginTop: 150}}></div>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/datenschutz' element={<Datenschutz />} />
          <Route path='/impressum' element={<Impressum />} />
        </Routes>
      </main>
      <div className="section-divider"></div>
      <Footer style={{marginBottom: 0}} />
    </div>
  );
}

export default App;
