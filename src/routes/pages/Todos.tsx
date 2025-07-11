import TodoCreator from '@/components/todos/TodoCreator'
import TodoList from '@/components/todos/TodoList'

export default function Todos() {
  return (
    <main className="max-auto max-w-[700px] p-5">
      <TodoCreator />
      <TodoList />
    </main>
  )
}
