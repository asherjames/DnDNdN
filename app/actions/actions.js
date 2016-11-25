export const DICE_TYPE_SELECTED = 'DICE_TYPE_SELECTED'
export const MODIFIER_SELECTED  = 'MODIFIER_SELECTED'
export const ROLL_FINISHED      = "ROLL_FINISHED"
export const ROLL_NUM_SELECTED  = 'ROLL_NUM_SELECTED'
export const ROLL_PRESSED       = "ROLL_PRESSED"

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
    return {
        type: ROLL_PRESSED
    }
}

export function rollFinished(result) {
    return {
        type: ROLL_FINISHED,
        payload: result
    }
}