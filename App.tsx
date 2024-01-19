import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.text5xl}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text5xl: {
    justifyContent: 'center',
    display: 'flex',
    flexGrow: 1,
    alignContent: 'center',
    fontSize: 50,
    color: 'red',
    alignItems: 'center',
  },
});
