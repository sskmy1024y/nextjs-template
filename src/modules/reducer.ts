import * as redux from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import * as Count from './count'

export interface RootState {
  count: Count.State
}

export type Dispatch = ThunkDispatch<RootState, never, redux.AnyAction>

export interface DispatchProp {
  dispatch: Dispatch
}

export interface Store extends redux.Store<RootState> {
  dispatch: Dispatch
}

export const initialState: RootState = {
  count: Count.initialState,
}

// Redux DevTools用のEnhancers
const composeEnhancers = (() => {
  return (
    (process.env.NODE_ENV !== 'production' &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    redux.compose
  )
})()

export const rootReducer = redux.combineReducers<RootState>({
  count: Count.reducer,
})

const middlewares = [thunk] // Add redux middleware here

const store = redux.createStore(rootReducer, composeEnhancers(redux.applyMiddleware(...middlewares)))

export default store
