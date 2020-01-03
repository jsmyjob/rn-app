import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export const AddToDo = ({ onSubmit }) => {

const [value, setValue] = useState('')

  const pressHandler = () => {
      if(value.trim()){
        onSubmit(value);
        setValue('');
      } else {
          // error
      }
    
  };

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input} 
        onChangeText = {(text) => setValue(text)}
        // onChangeText = {setValue}
        value={value}
        placeholder='Введите название дела'
        />
      <Button title="Добавить" style={styles.button} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",

    // лево-право (row)
    justifyContent: "space-between",

    // верх-низ
    alignItems: "center",

    marginBottom: 15
  },

  button: {
    backgroundColor: "#f194ff"
  },

  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    fontSize: 15,
    padding: 10
  }
});
