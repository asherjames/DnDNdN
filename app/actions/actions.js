export const DICE_TYPE_SELECTED = 'DICE_TYPE_SELECTED'
export const MODIFIER_SELECTED  = 'MODIFIER_SELECTED'
export const ROLL_STARTED       = 'ROLL_STARTED'
export const ROLL_FINISHED      = 'ROLL_FINISHED'
export const ROLL_NUM_SELECTED  = 'ROLL_NUM_SELECTED'
export const ROLL_PRESSED       = 'ROLL_PRESSED'

const Random = require('random-js')
const rand = new Random(Random.engines.mt19937().autoSeed())

export function rollNumSelected(num) {
    return {
        type: ROLL_NUM_SELECTED,
        payload: num
    }
}

export function diceTypeSelected(type) {
    return {
        type: DICE_TYPE_SELECTED,
        payload: type
    }
}

export function modifierSelected(mod) {
    return {
        type: MODIFIER_SELECTED,
        payload: mod
    }
}

export function rollPressed() {
    return(dispatch, getState) => {
        dispatch(rollStarted())
        let result = determineResult(getState())
        sleep(1000).then(() => dispatch(rollFinished(result)))
    }
}

export function rollStarted() {
    return {
        type: ROLL_STARTED
    }
}

export function rollFinished(result) {
    return {
        type: ROLL_FINISHED,
        payload: result
    }
}

function determineResult(state) {
    let dieType = state.dieType
    let result = 0

    for(let i = 0; i <= state.numOfRolls; i++) {
        result += rollDie(dieType)
    }

    return result + state.modifier
}

function rollDie(dieType) {
    switch(dieType) {
        case "D4":
            return random(4, 1)
        case "D6":
            return random(6, 1)
        case "D8":
            return random(8, 1)
        case "D10":
            return random(10, 1)
        case "D12":
            return random(12, 1)
        case "D20":
            return random(20, 1)
    }
}

function random(max, min) {
    return rand.integer(min, max)
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}