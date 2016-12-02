import React, {Component, PropTypes} from 'react'
import {ButtonGroup} from 'react-native-elements'
import {connect} from 'react-redux'
import {pickerStyle} from './PickerStyle'
import {rollNumSelected} from '../actions/actions'

class NumRollPickerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        const buttons = [1,2,3,4]
        return (
            <ButtonGroup buttons={buttons}
                         selectedBackgroundColor="#E1D8DB"
                         selectedIndex={this.state.selectedIndex}
                         containerStyle={pickerStyle.pickerContainer}
                         onPress={(index) => {
                             this.setState({selectedIndex: index})
                             this.props.onNumRollTap(buttons[index])
                         }}
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