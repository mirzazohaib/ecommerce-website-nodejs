import { DECREMENT, INCREMENT } from '../actions/counter'

const initialState = 0
export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT: {
      return state + 1
    }

    case DECREMENT: {
      return state - 1
    }

    default:
      return state
  }
}
