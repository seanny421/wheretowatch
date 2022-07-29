import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Keyboard, View, TouchableWithoutFeedback} from 'react-native';
import  SearchPanel  from './components/homescreen/SearchPanel';
import {LinearGradient} from 'expo-linear-gradient';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={['#120634','#201964']} style={styles.linearGradient}></LinearGradient>
      </TouchableWithoutFeedback>
      <SearchPanel></SearchPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120634',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    height: '50%',
    paddingLeft: '100%',
    // paddingRight: 15,
    borderRadius: 5
  }
});
