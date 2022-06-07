import create from "zustand";

const useStore = create((set) => ({
  todoside: [],
  addTodoide: (todoide) =>
    set((state) => {
      localStorage.setItem("todoside", JSON.stringify([...state.todoside, todoide]));
      return { todoside: [...state.todoside, todoide] };
    }),

  removeTodoide: (id) =>
    set((state) => {
      const todoside = state.todos.filter((todoide) => todoide.id !== id);
      localStorage.setItem("todoside", JSON.stringify(todoside));
      return { todoside };
    }),

  toggleTodo: (id) =>
    set((state) => {
      const todoside = state.todoside.map((todoide) =>
        todoide.id === id ? { ...todoide, completed: !todoide.completed } : todoide
      );
      localStorage.setItem("todoside", JSON.stringify(todoside));
      return { todoside };
    }),

  setTodoside: () =>
    set((_) => {
      const todoside = localStorage.getItem("todoside")
        ? JSON.parse(localStorage.getItem("todoside"))
        : [];
      return { todoside };
    }),
}));

export default useStore;