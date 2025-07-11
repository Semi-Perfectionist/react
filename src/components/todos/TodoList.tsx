import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import Loader from '@/components/Loader'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)
  const isLoadingForFetch = useTodoStore(state => state.isLoadingForFetch)

  useEffect(() => {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {isLoadingForFetch && <Loader size={100} />}
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}
