'use server'

import path from 'path'
import fs from 'fs/promises'
import { revalidatePath } from 'next/cache'

export async function addTodo(data) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'todos.json')
    const fileData = await fs.readFile(filePath, 'utf-8')

    const currentTodo = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.get('title'),
      description: data.get('description'),
    }
    if(currentTodo.title.trim() === '' || currentTodo.description.trim() === '') {
        return {
            error : "Title and description cannot be empty",
            success: false,
            message: 'Failed to add todo'
        }
    }

    const existingTodos = fileData ? JSON.parse(fileData) : [];
    
    existingTodos.push(currentTodo)

    await fs.writeFile(filePath, JSON.stringify(existingTodos, null, 2))
    revalidatePath('/todo-app')
    return {
        success: true,
        message: 'Todo added successfully',
    }
  } catch (error) {
    return {
        success: false,
        message: "Something went wrong while adding the todo",
        error : error.message 
    }
  }
}
export async function deleteTodo(id){
    try{
        const filePath = path.join(process.cwd(), 'data', 'todos.json')
        const fileData = await fs.readFile(filePath, 'utf-8')
        
        const existingTodos = fileData ? JSON.parse(fileData) : [];
        const updatedTodos = existingTodos.filter(todo => todo.id !== id)

        await fs.writeFile(filePath, JSON.stringify(updatedTodos, null, 2))
        revalidatePath('/todo-app');
        return {
            success: true,
            message: 'Todo deleted successfully'
        }
    }catch(error){
        return {
            success: false,
            message: "Something went wrong while deleting the todo",
            error: error.message
        }
    }
}