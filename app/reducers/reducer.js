import * as a from '../actions/actions'

export default function reducer(state = {}, action) {
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
        case a.ROLL_PRESSED:
            return Object.assign({}, state, {
                hasRolled: true,
                isRolling: true
            })
        case a.ROLL_FINISHED:
            return Object.assign({}, state, {
                isRolling: false,
                result: action.payload
            })
    }
}