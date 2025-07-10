let number: number = 123
number = 456

const user: {
  name: string
  age: number
} = {
  name: "John",
  age: 20
}

const fruits = ["apple", "banana", "cherry"]
const numbers = [1, 2, 3, 4, 5]
const array = [] // 빈 배열은 추론 X

function add<T>(a: <T>, b: <T>) {
  return a + b 
}
add<number>(1, 2)
add<string>("A", "B")

class Person {}
const person: Person = new Person()


/// 인터페이스
interface User<T>{
    name: string
    age: T
}

const userA: User<number> = {
    name: "John",
    age: 20
}

const userB: User<string> = {
    name: "Jane",
    age: "21"
}

console.log(userA, userB)

const inputEl = document.querySelector("input")
console.log(inputEl?.value)