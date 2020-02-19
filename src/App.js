import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Login } from './components/login.component';
import { Signup } from './components/signup.component';
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import { Dashboard } from './components/Dashboard.component';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b5994',
    },
    secondary: {
      main: '#1d83c6',
    },
  },
});

function App() {
  return (
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
      </MuiThemeProvider>
    </Router>
  );
}
export default App;
