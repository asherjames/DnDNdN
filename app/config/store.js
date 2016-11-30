import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/reducer'

export default function configureState() {
    const initialState = {
        numOfRolls: 1,
        dieType: "D4",
        modifier: 0,
        isRolling: false,
        hasRolled: false,
        result: 0
    }

    return createStore(
        reducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            createLogger()
        )
    )
}