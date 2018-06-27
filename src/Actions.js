export const change = (color) => ({
    type: 'CHANGE',
    payload: color
})

export const button = () => ({
    type: 'ON_BUTTON'
})

export const input = () => ({
    type: 'ON_INPUT'
})

export const plus = (value1, value2) => ({
    type: 'PLUS',
    payload: {
        val1: value1,
        val2: value2
    }
})

export const changeVal1 = val1 => {
    return {
        type: 'CHANGE_VAL_1',
        payload: val1
    }
}

export const changeVal2 = val2 => {
    return {
        type: 'CHANGE_VAL_2',
        payload: val2
    }
}