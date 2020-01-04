import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
    backgroundColor: "#3949ab",
    paddingBottom: 10
  },
  text: {
    color: "yellow",
    fontSize: 15
  }
});