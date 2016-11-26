import React, {Component, PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ButtonGroup} from 'react-native-elements'
import {connect} from 'react-redux'
import {pickerStyle} from './PickerStyle'
import {diceTypeSelected} from '../actions/actions'

class DicePickerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        const buttons = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20']
        return (
            <ButtonGroup buttons={buttons}
                         selectedIndex={this.state.selectedIndex}
                         containerStyle={pickerStyle.pickerContainer}
                         onPress={(index) => {
                             this.setState({selectedIndex: index})
                             this.props.onDieTap(buttons[index])
                         }}
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