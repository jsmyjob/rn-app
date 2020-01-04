import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { AddToDo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, removeTodo, todos }) => {
  return (
    <View style={styles.container}>
      <AddToDo onSubmit={addTodo} />

      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
