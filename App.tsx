import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';
const StyleView = styled(View);
const StyleText = styled(Text);
const App = () => {
  const isDarkMood = useColorScheme() === 'dark';
  return (
    <>
      <StyleView className="bg-white flex-1 px-2 pt-5 flex justify-center items-center">
        <StyleText className={`${isDarkMood ? 'text-white' : 'text-black'}`}>
          App
        </StyleText>
        <Text style={styles.container}>App</Text>
      </StyleView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
