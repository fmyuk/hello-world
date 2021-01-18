import types from "./types"
import * as creators from "./actionCreators"
import {CreatorsToActions} from "./actionsToActions"

type State = {
  count: number
  unit: string
}

type Actions = CreatorsToActions<typeof creators>

export const initialState(injects?: Partial<State>): State {
  return {
    count: 0,
    unit: "pt",
    ...injects
  }
}

export function reducer(state: State, action: any): State {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    case "DECREMENT":
      return { ...state, count: state.count - 1 }
    case "SET_COUNT":
      return { ...state, count: action.payload.amount }
    default:
      throw new Error()
  }
}

export { reducer, initialState }
