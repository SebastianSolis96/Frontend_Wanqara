import { useDispatch } from 'react-redux';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { values, handleInputChange } = useForm({
        email: '',
        password: ''
    });
    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();

        ( email.length > 0 && password.length > 0 )
            ? dispatch( startLogin( email, password ) )
            : Swal.fire('Error', 'Empty fields', 'error');
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title className="text-center" style={{ fontSize: '2rem' }}>LOGIN</Card.Title>

                    <Form onSubmit={ handleLogin }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                name="email"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                        </Form.Group>

                        <div className="col-md-12 text-center">
                            <Button className="text-center" style={{ fontSize: '1.3rem', width: '70%' }} variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
