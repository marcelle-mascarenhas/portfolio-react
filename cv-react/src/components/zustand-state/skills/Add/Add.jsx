import React from "react";
import useStore from "../../../../store";
import { v4 } from "uuid";
import { makeStyles } from "@material-ui/styles";
import { Paper, Button, TextField } from "@mui/material";


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

      <div>

      <Paper elevation={6} style={{ background: "#0000", color: "#4a00e0", border: "1px solid #4a00e0", padding:"1em"}} sx={{
        p: 1,
        margin: '10px auto',
        maxWidth: 284,
        height: 43
      }}><b>REACT</b>
      </Paper>
      <Paper elevation={6} style={{ background: "#0000", color: "#4a00e0", border: "1px solid #4a00e0", padding:"1em"}} sx={{
        p: 1,
        margin: '10px auto',
        maxWidth: 284,
        height: 43
      }}><b>HTML/CSS</b>
      </Paper>
      <Paper elevation={6} style={{ background: "#0000", color: "#4a00e0", border: "1px solid #4a00e0", padding:"1em"}} sx={{
        p: 1,
        margin: '10px auto',
        maxWidth: 284,
        height: 43
      }}><b>JAVASCRIPT</b>
      </Paper>
      </div>
      <Paper elevation={6} style={{ background: "#0000", color: "#4a00e0", border: "1px solid #4a00e0", padding:"1em"}} sx={{
        p: 1,
        margin: '10px auto',
        maxWidth: 284,
        height: 43
      }}><b>JAVA</b>
      </Paper>
      <Paper elevation={6} style={{ background: "#0000", color: "#4a00e0", border: "1px solid #4a00e0", padding:"1em"}} sx={{
        p: 1,
        margin: '10px auto',
        maxWidth: 284,
        height: 43
      }}><b>UX/UI DESIGN</b>
      </Paper>
    </form>

    

    

  );
};

export default AddTodo;