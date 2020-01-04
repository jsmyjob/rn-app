import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState('123');
  const [todos, setTodos] = useState([]); // тип данных "Кортеж"

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  };

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  };





  let content = <MainScreen removeTodo={removeTodo} addTodo={addTodo} todos={todos}/>
  if(todoId !== null) {
    content = <TodoScreen />
  }






  return (
    <View>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});

//* setTodos(todos.concate([newTodo]))

//** setTodos((prevTodos) => {
//   return [
//     ...prevTodos,
//     newTodo
//   ]
// });
