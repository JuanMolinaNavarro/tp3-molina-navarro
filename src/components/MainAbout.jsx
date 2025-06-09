import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const MainAbout = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('/data/about.json')
      .then((res) => res.json())
      .then((data) => {
        setDatos(data);
        console.log("Datos cargados");
      })
      .catch((error) => console.error("Error cargando JSON:", error));
  }, []);

  return (
    <div className='mainAbout'>
      {datos.map((d, idx) => (
        <Card className='card' style={{ width: '18rem' }} key={idx}>
          <Card.Body>
            <Card.Title>{d.titulo}:</Card.Title>
            <Card.Text>
              
                <li>{d.item1}</li>
                <li>{d.item2}</li>
                <li>{d.item3}</li>
                <li>{d.item4}</li>
              
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MainAbout;
