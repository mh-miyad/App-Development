import {View, Text} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';
const StyleView = styled(View);
const StyleText = styled(Text);
const App = () => {
  return (
    <>
      <StyleView className="bg-black flex-1 px-2 pt-5">
        <StyleText className="text-white text-4xl ">App</StyleText>
      </StyleView>
    </>
  );
};

export default App;
