import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal, FormControl } from "@material-ui/core";
import db from "./firebase";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { makeStyles } from "@material-ui/core/styles"
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';

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
    function onDelete(){
        var result = window.confirm("Are you sure you want to delete this note?");
        if (result) {
            deleteSure();
        }
    }
    const deleteSure = (event) => {
        db.collection('todos').doc(props.todo.id).delete();
        window.alert("Deleted Successfully.");
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}>
                <form>
                    <div className={classes.paper}>
                        <h1>Update your note.</h1>
                        <input
                            placeholder={props.todo.todo}
                            value={input}
                            onChange={event => setInput(event.target.value)}></input>
                        <Button type="submit" onClick={updateTodo}>Update</Button>
                    </div>
                </form>
            </Modal>
            <List className="todo-list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary={props.text} />
                    <Icon style={{ color: "#78e08f", fontSize: 30 }}>
                        <EditIcon onClick={handleOpen}></EditIcon>
                    </Icon>
                    <Icon style={{ color: "#eb2f06", fontSize: 30 }}>
                        <DeleteSweepIcon onClick={onDelete}></DeleteSweepIcon>
                    </Icon>
                </ListItem>

            </List>
        </>
    )
}

export default Todo
