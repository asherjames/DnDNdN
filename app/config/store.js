import {createStore} from 'redux'
import reducer from '../reducers/reducer'

export default function configureState() {
    const initialState = {
        numOfRolls: 0,
        diceNum: 0,
        modifier: 0,
        isRolling: false
    }

    return createStore(reducer, initialState)
}