import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Todo = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      borderColor: '#eee',
      borderWidth: 2,
      padding: 15,
      marginBottom: 10
  }
});
