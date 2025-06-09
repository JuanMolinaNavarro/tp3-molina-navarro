import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MainContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bfpzwoc', 'template_hbmgs9w', form.current, '_EZ6DDAteNhBFsCF9')
      .then((result) => {
        alert('Correo enviado correctamente');
      }, (error) => {
        alert('Error al enviar el correo');
        console.error(error.text);
      });

    e.target.reset();
  };

  return (

    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" required></Form.Control>

      </Form.Group>

      <Form.Group>

        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" required />
      
      </Form.Group>

      <Button className='enviarMail' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MainContact;
