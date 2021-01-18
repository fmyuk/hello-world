import React, { useState, useCallback, useMemo, useEffect, useRef, useReducer } from "react"
import { reducer, initialState } from "./reducer"

const Component: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  )
}

// const Component: React.FC = () => {
//   const ref = useRef<null | HTMLDivElement>(null)
//   useEffect(() => {
//     if (ref.current === null) return
//     const size = ref.current.getBoundingClientRect()
//     console.log(size)
//   })
//   return (
//     <div>
//       <div ref={ref} style={{ width: 100, height: 100 }}></div>
//     </div>
//   )
// }

// const Component: React.FC = () => {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(count + 1)
//     }, 1000)
//     return () => clearInterval(interval)
//   })
//   return (
//     <div>{count}</div>
//   )
// }

// type Props = {
//   clickedX: number
//   clickedY: number
//   handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
// }

// const Component: React.FC<Props> = props => (
//   <div>
//     <div
//       style={{ width: 100, height: 100, background: "#ccf" }}
//       onClick={props.handleClick}
//     />
//     <p
//       style={{ width: 100, height: 100, background: "#fcc" }}
//       onClick={props.handleClick}
//     />
//     <p>X: {props.clickedX}</p>
//     <p>Y: {props.clickedY}</p>
//   </div>
// )

// const Container: React.FC = () => {
//   const [state, update] = useState({
//     clickedX: 0,
//     clickedY: 0
//   })
//   const handleClick = useCallback(
//     (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
//       event.persist()
//       const { top, left } = event.currentTarget.getBoundingClientRect()
//       update(prev => ({
//         ...prev,
//         clickedX: event.clientX - left,
//         clickedY: event.clientY - top
//       }))
//     },
//     []
//   )
//   return (
//     <Component
//       clickedX={state.clickedX}
//       clickedY={state.clickedY}
//       handleClick={handleClick}
//     />
//   )
// }

// const Component: React.FC = () => {
//   const [count, setCount] = useState(0)
//   const double = useMemo(() => count * 2, [count])
//   const doubleWithUnit = useMemo(() => `${double}pt`, [double])
//   const handleClick = useCallback(() => {
//     setCount(prev => prev + 1)
//   }, [])
//   return (
//     <div>
//       <p>count : {count}</p>
//       <p>double : {double}</p>
//       <p>doubleWithUnit : {doubleWithUnit}</p>
//       <button onClick={handleClick}>+1</button>
//     </div>
//   )
// }

// const Component: React.FC = () => {
//   const [count, setCount] = useState<number | null>(0)
//   const double = useMemo<number | null>(() => {
//     if (count === null) return null
//     return count * 2
//   }, [count])
//   const doubleWithUnit = useMemo<string | null>(() => {
//     if (count === null) return null
//     return `${double}pt`
//   }, [double])
//   const handleClick = useCallback(() => {
//     setCount(prev => {
//       if (prev === null) return 0
//       return prev + 1
//     })
//   }, [])
//   return (
//     <div>
//       <p>count : {count}</p>
//       <p>double : {double}</p>
//       <p>doubleWithUnit : {doubleWithUnit}</p>
//       <button onClick={handleClick}>+1</button>
//     </div>
//   )
// }

// const Component: React.FC = () => {
//   const [count, setCount] = React.useState(0)
//   const handleClick = React.useCallback(() => {
//     setCount(count + 1)
//   }, [count])
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>+1</button>
//     </div>
//   )
// }

// const Component: React.FC = () => {
//   const [count, setCount] = React.useState(0)
//   const handleClick = React.useCallback(() => {
//     setCount("0")
//     setCount(prev => "3")
//     setCount(prev => prev + 1)
//   }, [count])
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>+1</button>
//     </div>
//   )
// }

export default Component
