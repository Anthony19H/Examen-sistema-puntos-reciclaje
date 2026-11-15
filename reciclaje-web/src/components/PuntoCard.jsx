function PuntoCard({ punto }) {
  return (
    <div className="card">
      <h3>{punto.nombre}</h3>
      <p><span>Sector:</span> {punto.sector}</p>
      <p><span>Material:</span> {punto.material}</p>
      <p><span>Capacidad:</span> {punto.capacidad} unidades</p>
    </div>
  );
}

export default PuntoCard;
