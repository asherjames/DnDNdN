import * as actions from '../app/actions/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Actions', () => {
    it('should create an action to change roll num', () => {
        const expected = {
            type: actions.ROLL_NUM_SELECTED,
            payload: 3
        }

        expect(actions.rollNumSelected(3)).toEqual(expected)
    })

    it('should create an action to change die type', () => {
        const expected = {
            type: actions.DICE_TYPE_SELECTED,
            payload: "D4"
        }

        expect(actions.diceTypeSelected("D4")).toEqual(expected)
    })

    it('should create an action to change modifier', () => {
        const expected = {
            type: actions.MODIFIER_SELECTED,
            payload: 2
        }

        expect(actions.modifierSelected(2)).toEqual(expected)
    })

    it('should create an action signifying the roll has started', () => {
        const expected = {
            type: actions.ROLL_STARTED
        }

        expect(actions.rollStarted()).toEqual(expected)
    })

    it('should create an action signifying the roll has finished with a result', () => {
        const expected = {
            type: actions.ROLL_FINISHED,
            payload: 5
        }

        expect(actions.rollFinished(5)).toEqual(expected)
    })

    it('should create roll finished when roll pressed is done', () => {
        const store = mockStore({
            numOfRolls: 1,
            dieType: "D4",
            modifier: 0,
        })

        store.dispatch(actions.rollPressed())
            .then(() => {
                expect(store.getActions()[0].type).toEqual(actions.ROLL_PRESSED)
                expect(store.getActions()[1].type).toEqual(actions.ROLL_FINISHED)
                expect(store.getActions()[1].payload).toBeLessThanOrEqual(4)
                expect(store.getActions()[1].payload).toBeGreaterThanOrEqual(1)
            })
    })
})