import { useState, useEffect } from 'react';
import PuntoCard from './components/PuntoCard';
import './App.css';

function App() {
  const [puntos, setPuntos] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    sector: '',
    material: '',
    capacidad: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/puntos')
      .then(res => res.json())
      .then(data => setPuntos(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/puntos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, capacidad: parseInt(form.capacidad) })
    });
    const nuevo = await response.json();
    setPuntos([...puntos, nuevo]);
    setForm({ nombre: '', sector: '', material: '', capacidad: '' });
  };

  return (
    <div className="container">
      <h1>Puntos de Reciclaje Urbano</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Registrar nuevo punto</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del punto"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sector"
          placeholder="Sector o barrio"
          value={form.sector}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="material"
          placeholder="Material que recibe"
          value={form.material}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacidad"
          placeholder="Capacidad (unidades)"
          value={form.capacidad}
          onChange={handleChange}
          required
        />
        <button type="submit">Guardar</button>
      </form>

      <h2>Listado de puntos</h2>
      <div className="grid">
        {puntos.map(punto => (
          <PuntoCard key={punto.id} punto={punto} />
        ))}
      </div>
    </div>
  );
}

export default App;
