import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddToDo } from "./src/AddTodo";

export default function App() {

  // todos - стейт, setTodos - функция, меняющая стейт
  const [todos, setTodos] = useState([]); // тип данных "Кортеж"

  //*
  //**
  // возврат (раскукоженого старого стейта + новый элемент)
  const addTodo = (title) => [...todos, {
     id = new Date().toString(),
     title: title
  }]

  return (
    <View >
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo}/>
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