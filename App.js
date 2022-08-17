//imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import SearchPanel from './components/homescreen/SearchPanel';
import { logThis } from './Constants';

const Stack = createNativeStackNavigator();

//TODO - clean up code (do we need to use LinearGradient twice?)
//     - keep clean good code

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <NavigationContainer>
            <LinearGradient colors={['#000516','#020d30']} locations={[0.5, 0.8]} 
            style={styles.linearGradient}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen
                    name='Home'
                    component={SearchPanel} />
                  <Stack.Screen
                    name='SearchList'
                    //FIXME - don't use inline arrow function
                    component={() => (<Text>Yo</Text>)} />
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
