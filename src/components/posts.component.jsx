import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Post from './post.component';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px'
    },
    container: {
        display:'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'stretch',
    },

}))

export const Posts = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((post, index) => {
                    return <Post key={index} />
                })}
            </div>
        </div>
    )
}