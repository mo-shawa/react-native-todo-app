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
        backgroundColor: '#161616',
        height: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomRightRadius: 100,
        // borderBottomLeftRadius: 40,
        borderBottomWidth: 2,
        // borderRightWidth: 2,
        borderColor: '#8AAD6B'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
    }
})