import { addTodo } from "@/app/actions/todo-actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function Todo() {
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

                    }
                </div>
            </div>
        </div>
        </>
     );
}

export default Todo;