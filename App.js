import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddToDo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  // todos - стейт, setTodos - функция, меняющая стейт
  const [todos, setTodos] = useState([]); // тип данных "Кортеж"

  //*
  //**
  // возврат (раскукоженого старого стейта + новый элемент)

  const addTodo = (title) => {

    // вызов функции
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
        <View>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id}/>;
          })}
        </View>
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
