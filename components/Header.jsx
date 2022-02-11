import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        height: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomRightRadius: 100,
        // borderBottomWidth: 0,
        // borderRightWidth: 2,
        // borderColor: 'cyan'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
    }
})