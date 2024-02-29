import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, Container, Form, Row, Col, Button } from 'react-bootstrap';

function LoginForm () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
     e.preventDefault();
     axios.post('http://localhost:5263/login', {
      email,
      password
     }).then(result => {
      navigate(`/dashboard/${result.data}`);
     }).catch(err => {
       setError(err.response.data)
     })     
  }

    return (
      <Container className="mt-5">
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <h1 className="text-center mb-4">PFG Login</h1>
              {error && 
              <Alert key={'danger'} variant={'danger'}>
                {error}
              </Alert>}
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor='UserName'>Email address:</Form.Label>
                    <Form.Control required id="UserName" type='email' onChange={handleUserNameChange} value={email} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor='Password'>Password:</Form.Label>
                    <Form.Control required id="Password" type='password' onChange={handlePasswordChange} value={password} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button type='submit' className="w-100">Login</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
    </Container>     
    )
}

export default LoginForm;