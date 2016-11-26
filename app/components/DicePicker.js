import React, {Component, PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ButtonGroup} from 'react-native-elements'
import {connect} from 'react-redux'
import {pickerStyle} from './PickerStyle'
import {diceTypeSelected} from '../actions/actions'

class DicePickerComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const buttons = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20']
        return (
            <ButtonGroup buttons={buttons}
                         selectedIndex={1}
                         containerStyle={pickerStyle.pickerContainer}
            />
        )
    }
}

DicePickerComponent.propTypes = {
    onDieTap: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDieTap: (dieType) => {
            dispatch(diceTypeSelected(dieType))
        }
    }
}

const DicePicker = connect(null, mapDispatchToProps)(DicePickerComponent)

export default DicePicker