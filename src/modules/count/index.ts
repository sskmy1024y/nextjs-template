import { Count } from './types'

export * from './actions'
export * from './reducers'
// eslint-disable-next-line import/export
export * from './operations'
export * from './selectors'

export type State = {
  count: Count
}

export const initialState: State = {
  count: 0,
}
