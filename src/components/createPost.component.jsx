import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles({
    root: {
        padding: '20px',
        display: 'flex',
        justifyContent :'center'
    },
    card: {
        width: '675px',
        padding: '20px'
    }
});


export const CreatePost = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className={classes.root}>
            <Form className={classes.card}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Title of your post</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                    <Form.Text className="text-muted">
                        Title of your post will be used for searching purpose.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Details of your post</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Post
                </Button>
            </Form>
        </div>
    )
};
