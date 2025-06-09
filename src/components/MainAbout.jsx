import React from 'react'
import { Card } from 'react-bootstrap'

const MainAbout = () => {
    return (
        <div className='main'>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>4 Hobbies:</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>
                                Tocar la guitarra
                            </li>
                            <li>
                                Leer
                            </li>
                            <li>
                                Mirar peliculas
                            </li>
                            <li>
                                Jugar videojuegos
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>4 Bandas:</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>
                                Oasis
                            </li>
                            <li>
                                The Rolling Stones
                            </li>
                            <li>
                                Intoxicados
                            </li>
                            <li>
                                Soda Stereo
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>4 Peliculas:</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>
                                Bastardos Sin Gloria
                            </li>
                            <li>
                                El Caballero de la Noche
                            </li>
                            <li>
                                La La Land
                            </li>
                            <li>
                                Anora
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>4 Videojuegos:</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>
                                Red Dead Redemption 2
                            </li>
                            <li>
                                The Simpsons Hit & Run
                            </li>
                            <li>
                                Mario Strikers Charged
                            </li>
                            <li>
                                Grand Theft Auto IV
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}

export default MainAbout