import { useState, useRef, useEffect } from "react"

export default function App() {
  const [fruits, setFruits] = useState(["사과", "바나나", "체리"])
  const [input, setInput] = useState("")
  const renderFruits = fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))

  const inputRef = useRef<HTMLInputElement>(null)

  function addFruit() {
    setFruits([...fruits, input])
    setInput("")
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, []) // 두번째 인자는 의존성 배열

  return (
    <>
      <h1>과일 리스트</h1>
      <input
        ref={inputRef}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === "Enter") {
            addFruit()
          }
        }}
      />
      <button onClick={() => addFruit()}>추가</button>
      <ul>{renderFruits}</ul>
    </>
  )
}
