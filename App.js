import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])
  const addTodoItem = () => {
    if (todoItem.trim() == '') return
    setTodoList([...todoList, todoItem])
    setTodoItem('')
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.textInput} placeholder='Enter Todo' onChangeText={text => setTodoItem(text)} value={todoItem} />
        <Button title='Add Todo' onPress={() => addTodoItem()} />
      </View>
      <View>
        <Text style={styles.heading}>List of Todos</Text>

        <ScrollView>
          {todoList.map((todo, index) => {
            return (
              <View key={index} style={styles.todoItem}>
                <Text>{todo}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    height: '100%'
  },
  textInput: {
    padding: 10,
    borderColor: 'blue',
    borderWidth: 0.5,
    borderRadius: 3,
    marginBottom: 10
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10
  },
  todoItem: {
    borderBottomColor: '#222222',
    borderBottomWidth: 1,
    marginVertical: 5,
    padding: 15
  }
});
