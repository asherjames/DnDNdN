import React, {Component, PropTypes} from 'react'
import {ButtonGroup} from 'react-native-elements'
import {connect} from 'react-redux'
import {pickerStyle} from './PickerStyle'
import {modifierSelected} from '../actions/actions'

class ModPickerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        const buttons = [0,1,2,3,4]
        return (
            <ButtonGroup buttons={buttons}
                         selectedIndex={this.state.selectedIndex}
                         containerStyle={pickerStyle.pickerContainer}
                         onPress={(index) => {
                             this.setState({selectedIndex: index})
                             this.props.onModTap(buttons[index])
                         }}
            />
        )
    }
}

ModPickerComponent.propTypes = {
    onModTap: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onModTap: (modNum) => {
            dispatch(modifierSelected(modNum))
        }
    }
}

const ModPicker = connect(null, mapDispatchToProps)(ModPickerComponent)

export default ModPicker