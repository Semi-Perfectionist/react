import { useState } from "react"

export default function App() {
  // let count = 1
  //const [getter, setter] = useState(1)
  //const [fruits, setFruits] = useState(["apple", "banana", "cherry"])
  //const [array, setArray] = useState<string[]>([])
  const [count, setCount] = useState(1)
  const [message, setMessage] = useState("Hello~")

  function handleClick() {
    const value = count + 1
    setCount(value)
    console.log(value)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value)
  }

  return (
    <>
      <input
        type="text"
        value={message}
        onChange={handleChange}
      />
      <h2>{message}</h2>
      <h1>Count:{count}</h1>
      <button onClick={() => handleClick()}>증가!</button>
    </>
  )
}
