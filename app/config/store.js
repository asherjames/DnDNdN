import {createStore} from 'redux'
import reducer from '../reducers/reducer'

export default function configureState() {
    const initialState = {
        numOfRolls: 1,
        dieType: "",
        modifier: 0,
        isRolling: false,
        hasRolled: false,
        result: 0
    }

    return createStore(reducer, initialState)
}