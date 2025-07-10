import { useState } from "react"

export default function App() {
  const [size, setSize] = useState(32)
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <h1
        style={{
          fontSize: `${size}px`
        }}
        className={`title${isActive ? "active" : ""}`}>
        Hello World!
      </h1>
      <button onClick={() => setIsActive(!isActive)}>토글</button>
      <button onClick={() => setSize(size + 10)}>증가 +</button>
    </>
  )
}
