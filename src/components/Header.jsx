import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="header">
            <h1>Juan Martin Molina Navarro</h1>
            <br />
                <Container className="header-container">
                    <Row>
                        <Row className="header-row">
                            <Col className="header-col">
                                <Link className="header-link" to="/">Home</Link>
                            </Col>
                            <Col className="header-col">
                                <Link className="header-link" to="/projects">Projects</Link>
                            </Col>
                            <Col className="header-col">
                                <Link className="header-link" to="/aboutme">About Me</Link>
                            </Col>
                            <Col className="header-col">
                                <Link className='header-link' to='/contact'>Contact</Link>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
            <hr />
        </div>
    )
}


export default Header