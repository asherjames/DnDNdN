import * as a from '../actions/actions'

let initialState = {
    numOfRolls: 1,
    dieType: "D4",
    modifier: 0,
    isRolling: false,
    hasRolled: false,
    result: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case a.DICE_TYPE_SELECTED:
            return Object.assign({}, state, {
                dieType: action.payload
            })
        case a.ROLL_NUM_SELECTED:
            return Object.assign({}, state, {
                numOfRolls: action.payload
            })
        case a.MODIFIER_SELECTED:
            return Object.assign({}, state, {
                modifier: action.payload
            })
        case a.ROLL_STARTED:
            return Object.assign({}, state, {
                hasRolled: true,
                isRolling: true
            })
        case a.ROLL_FINISHED:
            return Object.assign({}, state, {
                isRolling: false,
                result: action.payload
            })
        default:
            return initialState
    }
}