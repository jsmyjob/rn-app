import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddToDo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]); // тип данных "Кортеж"

  const addTodo = (title) => {

    setTodos( (prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  };
  

  return (
    <View>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo} />

        <FlatList 
        data = {todos}
        renderItem = { ({item}) => <Todo todo={item}/> }
        keyExtractor = { (item) => item.id }
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
