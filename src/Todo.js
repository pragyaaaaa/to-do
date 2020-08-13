import React from 'react';
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar} from"@material-ui/core";

function Todo(props) {
    return (

        <List className="todo-list">
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.text} secondary={props.text}/>
            </ListItem>
        </List>
    )
}

export default Todo
