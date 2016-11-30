import reducer from '../app/reducers/reducer'
import * as actions from '../app/actions/actions'

describe('Reducer', () => {
    const initialState = {
        numOfRolls: 1,
        dieType: "D4",
        modifier: 0,
        isRolling: false,
        hasRolled: false,
        result: 0
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle DICE_TYPE_SELECTED', () => {
        expect(reducer(undefined, {
            type: actions.DICE_TYPE_SELECTED,
            payload: "D6"
        })).toEqual({
            numOfRolls: 1,
            dieType: "D6",
            modifier: 0,
            isRolling: false,
            hasRolled: false,
            result: 0
        })
    })
})