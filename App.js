//imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { logThis } from './Constants';
//components
import SearchPanel from './components/homescreen/SearchPanel';
import MoviePage from './components/searchresults/MoviePage.js';
import SearchResults from './components/searchresults/SearchResults';
const Stack = createNativeStackNavigator();

//TODO - clean up code (do we need to use LinearGradient twice?)
//     - keep clean good code

export default function App() {
  //state
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <NavigationContainer>
            <LinearGradient colors={['#000516','#020d30']} locations={[0.5, 0.8]} 
            style={styles.linearGradient}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen
                    name='Home'
                    component={SearchPanel} 
                    searchText={searchText}
                    setSearchText={setSearchText}/>
                  <Stack.Screen
                    name='SearchResults'
                    component={SearchResults} 
                    searchText={searchText}/>
                  <Stack.Screen
                    name='MoviePage'
                    component={MoviePage}/>
                </Stack.Navigator>
            </LinearGradient>
            </NavigationContainer>
        </TouchableWithoutFeedback>
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  backGroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: 400,
    width: '100%'
  }
});
