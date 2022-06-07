import React from "react";
import useStore from "../../../../store";
import { v4 } from "uuid";
import { makeStyles } from "@material-ui/styles";
import { Button, TextField } from "@mui/material";

const useStyles = makeStyles({
  root: {
    //borda sem entrada
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4a00e0"
    },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#4a00e0"
  },
  }
}); 


const AddTodo = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = React.useState("");

  const classes = useStyles();

  const add = (e) => {
    e.preventDefault();
    addTodo({
      id: v4(),
      text,
      completed: false,
    });
    setText("");
  };

  return (
    <form onSubmit={(e) => add(e)}>


    <div style={{ display: "flex", justifyContent: "center", alignItens:"center", gap: "2em" }}>
        <TextField
           className={classes.root}
          id="outlined-basic"
          variant="outlined"
          size="small"
          onChange={(e) => setText(e.target.value)}
        />

      <Button type="submit" variant="contained" style={{ background: "#4a00e0" }} >
          ADD
        </Button>
      </div>
    </form>

  );
};

export default AddTodo;