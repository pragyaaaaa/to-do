import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal } from "@material-ui/core";
import db from "./firebase";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        handleClose();

    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}>
                <div className={classes.paper}>
                    <h1>Open</h1>
                    <input 
                    placeholder={props.todo.todo}
                    value={input} 
                    onChange={event => setInput(event.target.value)}></input>
                    <Button onClick={updateTodo}>Update</Button>
                </div>
            </Modal>
            <List className="todo-list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary={props.text} />
                </ListItem>
                <button onClick={handleOpen}>Edit</button>
                <DeleteSweepIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteSweepIcon>
            </List>
        </>
    )
}

export default Todo
