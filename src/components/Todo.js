import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => onOpen(todo.id)}
      onLongPress={() => onRemove(todo.id)}
      // onLongPress={onRemove.bind(this, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#eee",
    borderWidth: 2,
    padding: 15,
    marginBottom: 10
  }
});
