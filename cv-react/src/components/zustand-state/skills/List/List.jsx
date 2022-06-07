import React from "react";
import TodoItem from "../Item/Item";
import useStore from "../../../../store";


const TodoList = () => {
  const todos = useStore((state) => state.todos);

  return (
    <div className="todolist">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;