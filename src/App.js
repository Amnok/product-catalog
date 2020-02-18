import React from 'react';
import './App.css';
import MainBar from './components/layout/AppBar';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { Posts } from './components/posts.component';
import { CreatePost } from './components/createPost.component';
import { Login } from './components/login.component';
import { Signup } from './components/signup.component';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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
        <MainBar />
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Switch>
          <Route path="/" exact component={Posts}></Route>
          <Route path="/create-post" exact component={CreatePost}></Route>
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
