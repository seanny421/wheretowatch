//imports
import React, {useRef, useState} from 'react';
import {View, Alert, StyleSheet, Button, TextInput, SafeAreaView} from 'react-native';

export default function SearchPanel(){
  //state & values
  const [searchBarInput, setSearchBarInput] = useState('');
  //view
  return(
    <View style={styles.mainPanel}>
      <SafeAreaView style={{flexDirection: 'row', width: '100%', alignSelf: 'center', alignContent: 'center'}}>
        <TextInput
          style={styles.searchBar}
          onChangeText={setSearchBarInput}
          value={searchBarInput}
          placeholder="Type movie/tv show here"
        />
        <Button title='Search' onPress={() => logThis(searchBarInput)}></Button>
      </SafeAreaView>
    </View>
  );
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
    height: '50%',
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

