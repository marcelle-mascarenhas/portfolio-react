import React from "react";
import "./Item.css";
import useStore from "../../../../store";
import { Button, Paper, Grid } from "@mui/material";


const TodoItem = ({ todo }) => {
  const { removeTodo } = useStore((state) => state);

  return (

    <div className="paper-item">


      <Paper elevation={6} style={{ background: "#0000", border: "1px solid #4a00e0", }} sx={{
        p: 1,
        margin: '10px auto',
        maxWidth: 300,
      }}>
        <div className="todoitem">
          <div className="left">
            <span>{todo.completed ? <del>{todo.text}</del> : todo.text}</span>
          </div>
          <button className="deletebtn" onClick={() => removeTodo(todo.id)}>
            Delete
          </button>
        </div>
      </Paper>

    </div>












  );
};

export default TodoItem;