import { StyleSheet, Keyboard, View, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import  SearchPanel  from './components/homescreen/SearchPanel';
import Carousel from './components/homescreen/Carousel.js';
import { LinearGradient } from 'expo-linear-gradient';
import { logThis } from './Constants';

//TODO 
//      - png works with <Image source={png} so decide if pngs are worth it or just restyle

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={['#120634','#201964']} style={styles.linearGradient}>
              <Carousel />
            </LinearGradient>
        </TouchableWithoutFeedback>
      <SearchPanel></SearchPanel>
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
    height: '90%',
      width: '100%'
  },
  backGroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: 400,
    width: '100%'
  }
});
