import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])
  const addTodoItem = () => {
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
        <Text>List of Todos</Text>
        {todoList.map((todo) => {
          return <Text>{todo}</Text>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
  textInput: {
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10
  }
});
