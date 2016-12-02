import React, {Component, PropTypes} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {WanderingCubes} from 'react-native-spinkit'
const Spinner = require('react-native-spinkit')


class RollResultComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let content
        if(this.props.hasRolled) {
            if(this.props.isRolling) {
                content = <Spinner type="WanderingCubes" color="#FFF2C2"/>
            } else {
                content = <Text style={rollResultStyle.rollResultText}>{this.props.result}</Text>
            }
        }
        return (
            <View>{content}</View>
        )
    }
}

const rollResultStyle = StyleSheet.create({
    rollResultText: {
        color: '#7E0E8E',
        fontFamily: 'Bungee-Regular',
        fontSize: 85
    },
})

RollResultComponent.propTypes = {
    isRolling: PropTypes.bool.isRequired,
    hasRolled: PropTypes.bool.isRequired,
    result: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
        isRolling: state.isRolling,
        hasRolled: state.hasRolled,
        result: state.result
    }
}

const RollResult = connect(mapStateToProps, null)(RollResultComponent)

export default RollResult