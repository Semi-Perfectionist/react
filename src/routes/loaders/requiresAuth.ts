import { redirect } from 'react-router'

export async function requiresAuth({ request }: { request: Request }) {
  // 로그인 여부 확인
  const token = localStorage.getItem('token')
  if (token) return

  // http://localhost:5173/movies/tt1234567?a=1&b=2

  const url = new URL(request.url)
  const redirectTo = url.pathname + url.search
  return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
}
