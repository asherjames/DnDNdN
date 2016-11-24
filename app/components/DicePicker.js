import React, {Component, PropTypes} from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import {ButtonGroup} from 'react-native-elements'

export default class DicePicker extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const buttons = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20']
        return(
            <ButtonGroup buttons={buttons}
                         selectedIndex={1}
                         containerStyle={dicePickerStyle.buttonGroup}
            />
        )
    }
}

const dicePickerStyle = StyleSheet.create({
    buttonGroup: {
        height: 30
    }
})

DicePicker.propTypes = {
    onDieTap: PropTypes.func.isRequired
}