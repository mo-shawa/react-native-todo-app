import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';


export default function TodoItem(props) {
    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{props.todo}</Text>
            <AntDesign style={styles.deleteIcon} name='delete' size={20} color='red' onPress={() => props.delete(props.index)} />
        </View>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        padding: 15,
        backgroundColor: '#f5f5f5',
        marginTop: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoText: {
        // padding: 15,
        maxWidth: '80%',
    },
    deleteIcon: {
        padding: 15,
        // margin: 5,
    }
}) 