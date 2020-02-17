import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import url from '../assets/images/banner.jpg';


const useStyles = makeStyles({
    root: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    paper: {
        width: '575px',
        height: '500px',
        padding: '40px',
        marginTop: '150px',
        borderRadius: '10px'
    },
    button: {
        marginTop: '60px'
    }
});

export const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.paper}>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button className={classes.button} variant="primary" type="submit" size="lg" block>
                        Submit
                    </Button>
                </Form>
            </Paper>
        </div>
    )
}