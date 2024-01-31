import React, {useState} from "react";
import Todos from "./components/Todos";
import { TodoContext } from "./context/MyContext";

function App() {
  const [todos, setTodos] = useState([]);
  const onAddTodo = (content) => {
      const newTodo = {
          id: todos.length,
          content,
          isDone: false
      }
      setTodos([...todos, newTodo]);
  };
  const onDeleteTodo = (id) => {
      const newTodo = todos.filter(todo => todo.id !== id);
      setTodos(newTodo);
  };
  const onToggleTodo = (id) => {
      const newTodo = todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone} : todo);
      setTodos(newTodo);
  };

  return (
    <TodoContext.Provider value={{todos, onAddTodo, onDeleteTodo, onToggleTodo}}>
      <Todos />
    </TodoContext.Provider>
  );
}
export default App;
