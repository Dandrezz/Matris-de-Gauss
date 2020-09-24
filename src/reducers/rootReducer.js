import { combineReducers } from "redux";
import { calculationReducer } from "./calulationReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    calculation: calculationReducer
})