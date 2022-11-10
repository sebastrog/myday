import { useState } from "react";
import Todo from "./Todo";

const Todos = ({todos, deleteTodo}) => {
  return <>
    <ul>
      {
        todos.map((todo) =>
          <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} />
        )
      }
    </ul>
  </>
}
 
export default Todos;