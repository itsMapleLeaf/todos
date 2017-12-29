declare module 'immer' {
  export default function immer<S>(baseState: S, thunk: (state: S) => void): S
}
