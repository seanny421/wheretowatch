//imports
import React, {useRef, useState} from 'react';
import {Animated, Alert, StyleSheet, Button, TextInput, SafeAreaView} from 'react-native';

export default function SearchPanel(){
  //state & values
  const [searchBarInput, setSearchBarInput] = useState('');
  const panelTranslation = useRef(new Animated.Value(150)).current;
  //view
  return(
    <Animated.View  style={[styles.mainPanel, 
    {transform: [{translateY: panelTranslation}]}]}>
      <SafeAreaView style={{flexDirection: 'row', width: '100%', alignSelf: 'center', alignContent: 'center'}}>
        <TextInput
          onFocus={() => animatePanelSetValue(0)}
          onEndEditing={() => animatePanelSetValue(150)}
          style={styles.searchBar}
          onChangeText={setSearchBarInput}
          value={searchBarInput}
          placeholder="Type movie/tv show here"
        />
        <Button title='Search' onPress={() => logThis(searchBarInput)}></Button>
      </SafeAreaView>
    </Animated.View>
  );

  function animatePanelSetValue(value){
    Animated.timing(panelTranslation, {
      toValue: value,
      useNativeDriver: true,
    }).start();
  }
}


function logThis(text){
  Alert.alert(text);
}

//styles
const styles = StyleSheet.create({
  mainPanel: {
    position: 'absolute',
    bottom: '0%',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    height: '70%',
    backgroundColor: '#000516',
    //ios only
    borderTopRightRadius: '30%',
    borderTopLeftRadius: '30%',
  },
  searchBar: {
    margin: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  }
});