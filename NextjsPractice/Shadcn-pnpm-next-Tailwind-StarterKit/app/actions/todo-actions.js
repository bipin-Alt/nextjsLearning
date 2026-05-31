'use server'

import path from 'path'
import fs from 'fs/promises'

export async function addTodo(data) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'todos.json')
    const fileData = await fs.readFile(filePath, 'utf-8')

    const currentTodo = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.get('title'),
      description: data.get('description'),
    }

    const existingTodos = fileData ? JSON.parse(fileData) : []
    existingTodos.push(currentTodo)

    await fs.writeFile(filePath, JSON.stringify(existingTodos, null, 2))
    return 'Todo added successfully'
  } catch (error) {
    return error.message
  }
}