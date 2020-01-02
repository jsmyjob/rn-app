import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hellodfdfhjh111</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',

    // сдвиг право-лево (при flexDirection: column)
    // сдвиг верх-низ (при flexDirection: row)
    alignItems: 'center',

    // сдвиг верх-низ (при flexDirection: column)
    // сдвиг право-лево (при flexDirection: row)
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 26
  }
});
