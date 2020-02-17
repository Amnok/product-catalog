import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        width: '675px',
        padding: '20px'
    }
});

export const Signup = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Form className={classes.card}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type="text" placeholder="Enter firstname" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control type="text" placeholder="Enter lastname" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    )
}