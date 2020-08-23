import {combineReducers} from 'redux'
import stuffOperations from "./stuff-operations";
import generalOperations from "./general-operations";
import positionOperations from "./position-operations";

export default combineReducers({stuffOperations,generalOperations,positionOperations})