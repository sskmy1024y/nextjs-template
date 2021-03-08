import { Action, ActionNames, initialState, State } from '.'

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ActionNames.INCREMENT:
      return {
        ...state,
        count: ++state.count,
      }
    case ActionNames.DECREMENT:
      return {
        ...state,
        count: --state.count,
      }
    default:
      return state
  }
}
