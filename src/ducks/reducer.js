const initialState = {
    input: ''
}

//CONST VARIABLE NAMES
const UPDATE_INPUT = 'UPDATE_INPUT'

//ACTION CREATOR
export function updateInput(input){
    console.log('action creator function')
    return {
        type: UPDATE_INPUT,
        payload: input
    }
}



//REDUCER

export default function reducer(state = initialState, action){
    console.log('reducer function')
    switch(action.type){
        case UPDATE_INPUT: {
            return Object.assign({}, state, {input: action.payload})
            // return {...state, input: action.payload}
        }
        default: return Object.assign({}, state)
    }
}