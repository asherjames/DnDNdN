import React, {Component, PropTypes} from 'react'
import {ButtonGroup} from 'react-native-elements'
import {connect} from 'react-redux'
import {pickerStyle} from './PickerStyle'
import {rollNumSelected} from '../actions/actions'

class NumRollPickerComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const buttons = [1,2,3,4]
        return (
            <ButtonGroup buttons={buttons}
                         selectedIndex={1}
                         containerStyle={pickerStyle.pickerContainer}
            />
        )
    }
}

NumRollPickerComponent.propTypes = {
    onNumRollTap: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNumRollTap: (numRolls) => {
            dispatch(rollNumSelected(numRolls))
        }
    }
}

const NumRollPicker = connect(null, mapDispatchToProps)(NumRollPickerComponent)

export default NumRollPicker