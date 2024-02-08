import React from "react";

function Datos(props) {
  //console.log(props);
  const { nombre, telefono, direccion, imagenes } = props;
  return (
    <>
      <div className="card-group">
        <div className="card">
          <img src={imagenes} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{telefono}</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">{direccion}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datos;
