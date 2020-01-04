import React, { useState } from "react";
import { View, Modal, Button, TextInput, StyleSheet, Alert } from "react-native";
import { THEME } from "../themes/theme";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
      if(title.trim().length < 2) {
          Alert.alert('Ошибка!',`Текст задачи не может быть мыньше 2-х символов. Количество введенных вами символов: ${title.trim().length}.`)
      } else {
          onSave(title);
      }
  }
  return (
    <Modal visible={visible} animationType="fade" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите текст задачи"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={100}
        />
        <View style={styles.buttonsBlock}>
          <Button
            title="Отменить"
            onPress={onCancel}
            color={THEME.GREY_COLOR}
          />
          <Button title="Подтвердить" onPress={saveHandler}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%"
  },

  buttonsBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: "80%"
  }
});
