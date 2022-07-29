//imports
import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, Animated, TextInput, Keyboard} from 'react-native';

export default function SearchPanel(){
  //state & values
  const [isPanelHigh, setPanelHigh] = useState(false);
  const translation = useRef(new Animated.Value(400)).current;
  //view
  return(
      <Animated.View style={[styles(translation).mainPanel, {transform: [{translateY: translation}]}]}>
          {/* <Button
            style={styles().button}
            onPress={slideSearchPanel}
            title="Slide"
          /> */}
          <TextInput
            onFocus={slideSearchPanel}
            onPressOut={slideSearchPanel}
            style={styles().input}
            placeholder='Click here…'
            onSubmitEditing={Keyboard.dismiss}
          />
      </Animated.View>
  );

  function slideSearchPanel(){
    if(isPanelHigh){
      Animated.timing(translation, {
        toValue: 400,
      }).start();
      setPanelHigh(false);

    }
    else{
      Animated.timing(translation, {
        toValue: 200,
      }).start();
      setPanelHigh(true);
    }
    // setPanelHigh(!isPanelHigh);
  }
}
//styles
const styles = (panelHeight) => StyleSheet.create({
  mainPanel: {
    position: 'absolute',
    bottom: '0%',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    // borderTopRightRadius: '30%',
    // borderTopLeftRadius: '30%',
    backgroundColor: '#000516',
  },
  input: {
    backgroundColor: '#fff',
  }
});

