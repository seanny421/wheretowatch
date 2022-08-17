//imports
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { logThis } from '../../Constants';

export default function SearchPanel({ navigation }){
  //state & values
  const [searchBarInput, setSearchBarInput] = useState('');
  //view
  return(
    <LinearGradient colors={['#000516','#020d30']} locations={[0.5, 0.8]} 
    style={styles.linearGradient}>
      <View style={styles.mainPanel}>
        <SafeAreaView style={styles.logoContainer}>
          <Image style={styles.logoContainer} source={require('../../assets/home_backgrounds/sign-animation.gif')}/>
        </SafeAreaView>
        <SafeAreaView style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            onChangeText={setSearchBarInput}
            value={searchBarInput}
            placeholder="Type movie/tv show here"
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SearchList')}>
            <FontAwesome size={18} name='search' color='#000516'/>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
</LinearGradient>
  );
}

//styles
const styles = StyleSheet.create({
  mainPanel: {
    shadowColor: '#fff',
    position: 'absolute',
    bottom: '0%',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: '100%',
    height: 170
  },
  searchBar: {
    width: '70%',
    height: '100%', 
    padding: 15,
    backgroundColor: '#fff',
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
    letterSpacing: 0,
    alignItems: 'center',
    //shadow
    shadowColor: '#f235c9',
    shadowRadius: 10,
    shadowOpacity: 0.7,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 4
    },
  },
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 15,
    height: '100%',
    //ios only
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  linearGradient: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
});
