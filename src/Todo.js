import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from "@material-ui/core";
import db from "./firebase";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';


function Todo(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}>
                <div>
                    <h1>Open</h1>
                    <button onClick={handleClose}></button>
                </div>
            </Modal>
            <List className="todo-list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItem>
                    <ListItemText primary={props.todo.task} secondary={props.text} />
                </ListItem>
                <button onClick={handleOpen}>Edit</button>
                <DeleteSweepIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteSweepIcon>
            </List>
        </>
    )
}

export default Todo
