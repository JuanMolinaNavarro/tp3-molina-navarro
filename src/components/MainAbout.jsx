import React from 'react'
import { Card } from 'react-bootstrap'

  const [datos, setDatos] = useState([]);

  // Se ejecuta solo UNA VEZ cuando el componente se monta
  useEffect(() => {
    console.log("Cargando datos del JSON...");
    fetch('../data/about.json')
      .then((res) => res.json())
      .then((data) => {
        setDatos(data);
        console.log("Datos cargados");
      })
      .catch((error) => console.error("Error cargando JSON:", error));
  }, []); // <--- Este array vacío hace que se ejecute solo una vez



const MainAbout = () => {
    return (
        <div className='mainAbout'>
            {datos.map((d) => (

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>4 {d.titulo}:</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>
                                    {d.item1}
                                </li>
                                <li>
                                    {d.item2}
                                </li>
                                <li>
                                    {d.item3}
                                </li>
                                <li>
                                    {d.item4}
                                </li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

            ))}

        </div>
    )
}

export default MainAbout