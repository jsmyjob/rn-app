import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddToDo } from "./src/AddTodo";

export default function App() {
  return (
    <View >
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddToDo />
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
