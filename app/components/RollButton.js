import React, {Component, PropTypes} from 'react'
import ActionButton from 'react-native-action-button'
import {StyleSheet} from 'react-native'

export default class RollButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ActionButton buttonColor="#84B292" onPress={() => this.props.rollTap()}/>
        )
    }
}

RollButton.propTypes = {
    rollTap: PropTypes.func.isRequired
}