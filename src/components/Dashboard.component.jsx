import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Posts } from './posts.component';
import { CreatePost } from './createPost.component';
import MainBar from './layout/AppBar';


export const Dashboard = () => {
    return (
        <React.Fragment>
            <MainBar />
            <Switch>
                <Route exact path="/" component={Posts}></Route>
                <Route exact path="/create-post" component={CreatePost}></Route>
            </Switch>
        </React.Fragment>
    )
}