import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../themes/theme";
import { AppCard } from "../ui/AppCard";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View style={styles.container}>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title={'Ред.'}/>
      </AppCard>

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

  card: {
    padding: 15,
    marginBottom: 20
  },

  button: {
    width: "35%"
  },
  title: {
    fontSize: 15
  },
});
