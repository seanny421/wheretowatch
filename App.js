import { StyleSheet, Keyboard, View, TouchableWithoutFeedback, ImageBackground} from 'react-native';
import  SearchPanel  from './components/homescreen/SearchPanel';
import image from './assets/home_backgrounds/netflixlogodefault.jpeg';
import Carousel from './components/homescreen/Carousel.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  // const backgroundNetflix = {'./'}
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Carousel/>
            {/* <LinearGradient colors={['#120634','#201964']} style={styles.linearGradient}>
            </LinearGradient> */}
        </TouchableWithoutFeedback>
      <SearchPanel></SearchPanel>
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#120634',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    height: '50%',
    paddingLeft: '100%',
    // paddingRight: 15,
    borderRadius: 5
  },
  backGroundImage: {
    flex: 1,
    justifyContent: 'center',
    height: 400,
    width: '100%'
    // height: '100%',
  }
});
