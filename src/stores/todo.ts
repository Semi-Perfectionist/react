import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

type Todos = Todo[]
interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todos
    },
    () => {
      return {
        fetchTodos: async () => {
          const { data } = axios({
            method: 'GET',
            url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
            headers: {
              'content-type': 'application/json',
              apikey: import.meta.env.VITE_API_KEY,
              username: import.meta.env.VITE_USERNAME
            }
          })
        }
      }
    }
  )
)
