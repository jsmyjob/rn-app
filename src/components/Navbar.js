import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../themes/theme";

export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "column",
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10
  },
  text: {
    color: "yellow",
    fontSize: 15
  }
});
