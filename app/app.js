import React, {Component} from 'react'
import RollButton from './components/RollButton'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class DnDNdN extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
             }}>
                <RollButton/>
            </View>
        );
    }
}