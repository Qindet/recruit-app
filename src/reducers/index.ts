import {combineReducers} from 'redux'
import stuffOperations from "./stuff-operations";
import generalOperations from "./general-operations";
import positionOperations from "./position-operations";

export const rootReducer  = combineReducers({stuffOperations,generalOperations,positionOperations})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
