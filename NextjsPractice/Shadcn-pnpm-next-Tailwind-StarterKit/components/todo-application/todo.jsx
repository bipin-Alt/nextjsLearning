'use client'
import { addTodo, deleteTodo } from "@/app/actions/todo-actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { useActionState } from "react";


const initialState = {};
function Todo({todos}) {
   const [addState, addAction] = useActionState(addTodo, initialState);
   const [deleteState, deleteAction] = useActionState(deleteTodo, initialState);
   console.log("Delete Action : " , deleteAction);
   console.log("Delete State", deleteState);
   console.log(todos);
   
    return ( 
        <>
        <div>
            <form action={addTodo}>
             <label>
                Todo Title :
                <Input name='title' type="text" placeholder="eg:do-Homework"/>
             </label>
             <label>
                Todo Description:
                <Textarea name='description' type="text" placeholder="eg:Today I have an homework of xyz subjects..." />
             </label>
             <Button>Add Todo</Button>
            </form>

            <div>
                Your Todos :
                <div>
                    {
                     todos.map((todo) =>(
                     <div key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <form action={deleteTodo.bind(null, todo.id)}>
                           <Button>Delete Todo</Button>
                        </form>
                        <form>
                            <Button>Mark as complete</Button>
                        </form>
                     </div>
                    ))
                    }
                </div>
            </div>
        </div>
        </>
     );
}

export default Todo;