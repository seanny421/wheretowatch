//imports
import React, {useRef, useState} from 'react';
import {Animated, TouchableOpacity, StyleSheet, Button, TextInput, SafeAreaView} from 'react-native';
import { logThis } from '../../Constants';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchPanel(){
  //state & values
  const [searchBarInput, setSearchBarInput] = useState('');
  const panelTranslation = useRef(new Animated.Value(150)).current;
  //view
  return(
    <Animated.View  style={[styles.mainPanel, 
    {transform: [{translateY: panelTranslation}]}]}>
      <SafeAreaView style={styles.searchBarContainer}>
        <TextInput
          onFocus={() => animatePanelSetValue(0)}
          onEndEditing={() => animatePanelSetValue(150)}
          style={styles.searchBar}
          onChangeText={setSearchBarInput}
          value={searchBarInput}
          placeholder="Type movie/tv show here"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => logThis(searchBarInput)}>
          <FontAwesome size={18} name='search' color='#000516'/>
        </TouchableOpacity>
      </SafeAreaView>
    </Animated.View>
  );

  //helper functions
  function animatePanelSetValue(value){
    Animated.timing(panelTranslation, {
      toValue: value,
      useNativeDriver: true,
    }).start();
  }
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
    width: '60%',
    height: '100%', 
    padding: 15,
    backgroundColor: '#fff',
    // borderRadius: 25,
    //ios only
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,

  },
  searchBarContainer: {
    marginTop: 50,
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 15,
    height: '100%',
    // width: '50%',
    //ios only
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,

  }
});
