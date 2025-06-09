import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainProjects from '../components/MainProjects';



const Projects = () => {
    return (
        <div>
            <Header></Header>
            <MainProjects/>
            <Footer></Footer>
        </div>
    )
}

export default Projects