import { createContext } from "react"

export const TodoContext = createContext({
    todo: [],
    onAddTodo: () => {},
    onDeleteTodo: () => {},
    onToggleTodo: () => {}
});