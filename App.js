import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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
    <ScrollView>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo} />
        <View>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id}/>;
          })}
        </View>
      </View>
    </ScrollView>
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
