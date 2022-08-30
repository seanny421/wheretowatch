import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MoviePage({route, navigation}){
    const {movieObject} = route.params;
    const image = {uri : 'https://img.freepik.com/premium-vector/space-background-with-stars-vector-illustration_97886-319.jpg?w=740'}
    return (
        <ImageBackground source={image} style={styles.linearGradient}>

            {/* page content */}
            <ScrollView contentContainerStyle={styles.masterContainer}> 
                {/* first child container*/}
                <Image style={styles.firstChild} source={{uri: 'https://image.tmdb.org/t/p/original/' + movieObject.poster_path}}>
                </Image>
                {/* second child container*/}
                <View intensity={0.01} style={styles.secondChild}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#fff'}}>{movieObject.title}</Text>
                    </View>
                </View>
                <View intensity={0.01} style={styles.thirdChild}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#fff'}}>{movieObject.title}</Text>
                    </View>
                </View>
                {/* third child container*/}
            </ScrollView>
            {/* end page content */}

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    masterContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start ',
    },
    firstChild: {
        width: '90%',
        marginVertical: 25,
        height: 200, 
        borderRadius: 10,
    },
    secondChild: {
        width: '90%',
        marginBottom: 25,
        height: 100,
        backgroundColor: 'rgba(12, 17, 31, 0.9)', 
        borderRadius: 10,
        //shadow
        shadowColor: '#f235c9',
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 2,
        shadowOffset: {
        width: 2,
        height: 4
        },
    },
    thirdChild: {
        width: '90%',
        height: 90, 
        // backgroundColor: 'rgba(120, 125, 121, 0.15)', 
        // borderColor: 'pink',
        // borderWidth: 2,
        borderRadius: 10,

    }
});
