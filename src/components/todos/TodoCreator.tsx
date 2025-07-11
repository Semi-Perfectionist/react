import { useState } from 'react'
import { useTodoStore } from '@/stores/todo'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function TodoCreator() {
  const [title, setTitle] = useState('')
  const createTodo = useTodoStore(state => state.createTodo)
  const isLoadingForCreate = useTodoStore(state => state.isLoadingForCreate)

  async function handleCreateTodo(title: string) {
    if (!title.trim()) return
    await createTodo(title)
    setTitle('')
  }

  return (
    <div className="grid grid-cols-[1fr_100px] gap-2">
      <TextField
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') handleCreateTodo(title)
        }}
      />
      <Button
        variant="primary"
        loading={isLoadingForCreate}
        onClick={() => handleCreateTodo(title)}>
        추가
      </Button>
    </div>
  )
}
