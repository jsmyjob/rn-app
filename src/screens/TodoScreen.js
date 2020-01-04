import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../themes/theme";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View style={styles.container}>
      <Text>{todo.title}</Text>
      <View style={styles.buttonsBlock}>
        <View style={styles.button}>
          <Button title="Назад" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            onPress={() => console.log("DELETE")}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonsBlock: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "35%"
  }
});
