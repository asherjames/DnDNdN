import React, {Component, PropTypes} from 'react'
import {Icon} from 'react-native-elements'
import {StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {rollPressed} from '../actions/actions'

class RollButtonComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Icon
                reverse={true}
                name="casino"
                onPress={() => this.props.rollTap()}
            />
        )
    }
}

RollButtonComponent.propTypes = {
    rollTap: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        rollTap: () => dispatch(rollPressed())
    }
}

const RollButton = connect(null, mapDispatchToProps)(RollButtonComponent)

export default RollButton