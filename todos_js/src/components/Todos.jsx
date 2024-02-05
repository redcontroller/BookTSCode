import { useState, useContext } from "react";
import { TodoContext } from "../context/MyContext";
import styles from "./Todos.module.css";

export default function Todos() {
    const [inputValue, setInputValue] = useState("");
    const {todos, onAddTodo, onDeleteTodo, onToggleTodo} = useContext(TodoContext);

    return (
        <main className={styles.main}>
            <form
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
            >
                <input className={styles.input}
                    type="text"
                    value={inputValue}
                    placeholder="할 일을 작성해 주세요"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className={styles.btninput}
                    type="submit"
                    onClick={() => { onAddTodo(inputValue); setInputValue("");}}
                >
                추가
                </button>
            </form>
            <hr />
            {todos.map((todo) => (
                <section className={styles.section} key={todo.id}>
                    <div 
                    className={styles.todotext}
                    style={{display: "inline-block", textDecoration: todo.isDone ? "line-through" : "none" }} >
                        <input
                        className={styles.checkbox}
                        type="checkbox"
                        onClick={() => onToggleTodo(todo.id)} />
                        {todo.content}
                    </div>
                    <span className={styles.tooltip}>{todo.content}</span>
                    <button className={styles.btncheck} onClick={() => onDeleteTodo(todo.id)}>❌</button>
                </section>
            ))}
        </main>
    )
}