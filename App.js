/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Header from './src/assets/components/header';
import {generalStyles} from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Input from './src/assets/components/input';
import Todo from './src/assets/components/todo';
import {colors} from './src/utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    AsyncStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
      .then(() => {
        setTodos([...todos, newTodo]);
        setText('');
      })
      .catch(err => {
        Alert.alert('Hata', 'Kayıt esnasında bir hata oluştu');
      });
  };
  useEffect(() => {
    AsyncStorage.getItem('todos')
      .then(res => {
        console.log(res);
        /*null degilse kayit vardır*/
        if (res !== null) {
          const parsedRes = JSON.parse(res);
          setTodos(parsedRes);
        } else {
          setTodos([]);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title="To Do App" />
      <Input
        value={text}
        onChangeText={text => setText(text)}
        placeholder="todo"
        hasIcon={true}
        onIconPress={addTodo}
      />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}>
            {' '}
            Henüz kayıtlı todo bulunmamaktadır.
          </Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {todos?.map(todo => (
              <Todo
                key={todo?.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.cherry,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default App;
