import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import url from '../assets/images/banner.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
    // backgroundImage: `url(${url})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
  },
  textFieldMargin: {
    marginRight: theme.spacing(5)
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    width: theme.spacing(30),
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const CreatePost = props => {
  console.log('filter CreatePost', props);
  const [age, setAge] = React.useState('');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <div className={classes.row}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="medium"
                id="email"
                label="Enter Item name"
                name="name"
                autoComplete="name"
                autoFocus
                className={classes.textFieldMargin}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="price"
                label="Enter Price"
                type="number"
                id="content"
                autoComplete="current-password"
              />
            </div>
            <div className={classes.row}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="medium"
                id="email"
                label="Enter Item name"
                name="name"
                autoComplete="name"
                autoFocus
                className={classes.textFieldMargin}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="content"
                label="Enter Content"
                type="text"
                id="content"
                autoComplete="current-password"
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="medium"
                id="email"
                label="Enter Item Details ....."
                name="name"
                autoComplete="name"
                autoFocus
                className={classes.textFieldMargin}
                rows="4"
                multiline
              />
            </div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                labelWidth={labelWidth}
                // fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Add Product
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
