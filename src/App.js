import React from 'react';
import './App.css';
import MainBar from './components/layout/AppBar';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { Posts } from './components/posts.component';
import { CreatePost } from './components/createPost.component';

function App() {
  return (
    <Router history={history}>
      <MainBar />
      <Switch>
      <Route path="/" exact component={Posts}></Route>
      <Route path="/create-post" exact component={CreatePost}></Route>
      </Switch>
    </Router>
  );
}

export default App;
