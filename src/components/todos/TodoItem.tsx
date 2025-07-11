import type { Todo } from '@/stores/todo'
import { useState, useRef, useEffect } from 'react'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { useTodoStore } from '@/stores/todo'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const [isDone, setIsDone] = useState(todo.done)
  const inputRef = useRef<HTMLInputElement>(null)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const isLoadingForUpdate = useTodoStore(state => state.isLoadingForUpdate)
  const isLoadingForDelete = useTodoStore(state => state.isLoadingForDelete)

  useEffect(() => {
    if (isEditing) inputRef.current?.focus()
  }, [isEditing])

  useEffect(() => {
    handleTodo()
    // eslint-disable-next-line
  }, [isDone])

  function onEditMode() {
    setIsEditing(true)
    setTitle(todo.title)
  }
  function offEditMode() {
    setIsEditing(false)
    setTitle(todo.title)
  }
  async function handleSave() {
    if (title === todo.title) return
    await updateTodo({
      ...todo,
      title
    })
    offEditMode()
  }
  async function handleDelete() {
    await deleteTodo(todo)
    offEditMode()
  }
  async function handleTodo() {
    await updateTodo({
      ...todo,
      done: isDone
    })
  }

  return (
    <li className="mt-2">
      {isEditing ? (
        <div className="grid grid-cols-[1fr_100px_100px_100px] items-center gap-2">
          <TextField
            ref={inputRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') offEditMode()
              if (e.key === 'Enter') handleSave()
            }}
          />
          <Button
            variant="secondary"
            onClick={offEditMode}>
            취소
          </Button>
          <Button
            variant="primary"
            loading={isLoadingForUpdate}
            onClick={handleSave}>
            저장
          </Button>
          <Button
            variant="danger"
            loading={isLoadingForDelete}
            onClick={handleDelete}>
            삭제
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-[20px_1fr_100px] items-center gap-2 leading-[1]">
          <input
            type="checkbox"
            checked={isDone}
            className="h-4 w-4 accent-blue-500"
            onChange={e => setIsDone(e.target.checked)}
          />
          <h3 onDoubleClick={onEditMode}>{todo.title}</h3>
          <Button
            variant="primary"
            onClick={() => onEditMode()}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}
