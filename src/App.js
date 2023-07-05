import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Inicio from './inicio';
import Logini from './componentes/Login.js';
import Formm from './componentes/StudentAdd';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/StudentAdd" element={<Formm />} />
          <Route path="/" element={<Logini />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

