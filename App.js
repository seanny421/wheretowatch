import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  SearchPanel  from './components/homescreen/SearchPanel';
import {LinearGradient} from 'expo-linear-gradient';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#120634','#201964']} style={styles.linearGradient}>
      {/* <Text>Exciting Stuff!</Text>
        <Text>We have set off with wheretowatch!</Text>
        <Text>Everything goes up from here!</Text>
      <StatusBar style="auto" /> */}
      </LinearGradient>
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
