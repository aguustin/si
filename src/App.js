import './App.css';
import Home from './home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comunicacion } from './comunicacion/comunicacion';
import Contacto from './contacto/contacto';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/secciones" element={<Comunicacion/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
