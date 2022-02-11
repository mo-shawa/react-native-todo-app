import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, StatusBar } from 'react-native';
import TodoItem from './components/TodoItem';
import Header from './components/Header';

export default function App() {
  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodoItem = () => {
    if (todoItem.trim() == '') return
    setTodoList([...todoList, todoItem])
    setTodoItem('')
  }

  const deleteTodo = (index) => {
    let todos = [...todoList]
    todos.splice(index, 1)
    setTodoList(todos)
  }
  // TODO: 'done' drawer => new state holder
  // sort by priority or date created maybe deadline => new state in todo list
  // reminders => look into reminders for android and ios
  // subtasks [progress bars]
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <Header title='To do List' />
      <View style={styles.container}>
        <ScrollView>
          <View>
            {todoList.length === 0 ? <Text style={styles.heading}>No Todos yet, add one below</Text> : null}
            {todoList.map((todo, index) => {
              return (
                <TodoItem todo={todo} key={index} index={index} delete={deleteTodo} />
              )
            })}
          </View>
        </ScrollView>
        <View>
          <TextInput style={styles.textInput} placeholder='Enter Todo' onChangeText={text => setTodoItem(text)} value={todoItem} />
          <Button color={'#161616'} style={styles.button} title='Add Todo' onPress={() => addTodoItem()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    paddingVertical: 30,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    height: '75%'
  },
  textInput: {
    padding: 10,
    borderColor: '#8AAD6B',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10
  },
});
