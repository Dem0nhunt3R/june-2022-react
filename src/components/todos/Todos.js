import {useEffect, useState} from "react";

import {apiService} from "../../services";
import {Todo} from "../todo/Todo";

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        apiService.getTodos().then(({data}) => setTodos([...data]));
    }, []);

    return (
        <div>
            {
                todos.map(todo=><Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};
