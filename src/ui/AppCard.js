import React from "react";
import { View, StyleSheet } from "react-native";

export const AppCard = props => (
  <View style={{ ...styles.default, ...props.style }}>
      {props.children}
      </View>
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,

    // тени
    shadowColor: "#000",
    elevation: 8,
    backgroundColor: "#fff",

    // only IOS shadows
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 }
  }
});
