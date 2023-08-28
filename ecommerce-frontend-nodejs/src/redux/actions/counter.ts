export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function handleIncrement() {
  return {
    type: INCREMENT,
  }
}
export function handleDecrement() {
  return {
    type: DECREMENT,
  }
}
