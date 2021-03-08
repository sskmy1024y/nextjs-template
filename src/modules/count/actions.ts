import { TypedAction } from 'utils/redux'

export enum ActionNames {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SetCountActionPayload {}

export type SetIncrementAction = TypedAction<ActionNames.INCREMENT, SetCountActionPayload>

export type SetDecrementAction = TypedAction<ActionNames.DECREMENT, SetCountActionPayload>

export type Action = SetIncrementAction | SetDecrementAction

export const increment = (): SetIncrementAction => ({
  type: ActionNames.INCREMENT,
  payload: {},
})

export const decrement = (): SetDecrementAction => ({
  type: ActionNames.DECREMENT,
  payload: {},
})
