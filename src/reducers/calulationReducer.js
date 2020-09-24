import { types } from '../types/types';

const initialState = {
    input:[],
    answer:[],
    echelonMatrix:{},
    answerTemp:[],
}

export const calculationReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.calculate:
            return {
                ...state,
                answer:action.payload
            }
        case types.calculateLoadInput:
            return {
                ...state,
                input:action.payload
            }
        case types.calculateLoadAnswer:
            return {
                ...state,
                answer:action.payload
            }
        case types.calculateLoadEchelonMatrix:
            return {
                ...state,
                echelonMatrix:action.payload
            }
        case types.calculateLoadAnswerTemp:
            return {
                ...state,
                answerTemp:action.payload
            }
        default:
            return state;
    }
}