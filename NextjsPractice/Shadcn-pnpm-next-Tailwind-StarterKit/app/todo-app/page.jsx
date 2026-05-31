import Todo from "@/components/todo-application/todo";
import fs from 'fs'
import path from 'path'
function TodoApp() {
    const filePath = path.join(process.cwd(), "data" , "todos.json");
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const todos = JSON.parse(fileData);
    return ( 
        <>
         <Todo todos={todos}/>
        </>
     );
}

export default TodoApp;