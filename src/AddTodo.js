import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const AddToDo = ({onSubmit}) => {

    const pressHandler = () => {
        onSubmit('Test Todo');
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='Добавить' style={styles.button} onPress={pressHandler}/>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',

        // лево-право (row)
        justifyContent: 'space-between',

        // верх-низ
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#f194ff',
    },

    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        fontSize: 15,
        padding: 10
    }
})