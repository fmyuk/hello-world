import {increment, decrement, setCount} from "./actionCreators"

type IncrementAction = ReturnType<typeof increment>
type DecrementAction = ReturnType<typeof decrement>
type SetCountAction = ReturnType<typeof setCount>
type Actions = IncrementAction | DecrementAction | SetCountAction
