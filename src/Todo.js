import React from 'react';
import './Todo.css';
import {List, ListItem, ListItemText, ListItemAvatar, Button} from"@material-ui/core";
import db from "./firebase";

function Todo(props) {
    return (

        <List className="todo-list">
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.todo.task} secondary={props.text}/>
            </ListItem>
            <Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
        </List>
    )
}

export default Todo
