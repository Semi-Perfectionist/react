import { useState, useMemo, useEffect } from "react"

export default function App() {
  const [count, setCount] = useState(1)
  const double = useMemo(() => count * 2, [count])

  useEffect(() => {
    console.log(`count: ${count}`)
  }, [count])

  return (
    <>
      <h1>count: {count}</h1>
      <h2>double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </>
  )
}
