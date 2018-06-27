const initialState = {
    color: 'purple',
    onButton: true,
    onInput: true,
    val1: 0,
    val2: 0,
    suma: 0
}

export const changer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                color: action.payload,
            }
        case 'ON_BUTTON':
            return {
                ...state,
                onButton: !state.onButton
            }
        case 'ON_INPUT':
            return {
                ...state,
                onInput: !state.onInput
            }
        case 'PLUS':
            return {
                ...state,
                suma: state.val1 + state.val2
            }
        case 'CHANGE_VAL_1':
            return {
                ...state,
                val1: action.payload
            }
        case 'CHANGE_VAL_2':
            return {
                ...state,
                val2: action.payload
            }
        default:
            return state
    }
}
