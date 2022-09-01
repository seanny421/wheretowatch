import { MOVIE_API_KEY } from '@env';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { splitByDelimiter } from '../../Constants';

//view
export default function SearchResults({route, navigation}){
    //state and variables
    const { searchBarInput } = route.params;
    // list of json objects return from api call 
    const [ searchResponseList, setSearchResponseList ] = useState([]);

    //run once on component load
    useEffect(() => {
        //get list of movies from api based on user input
        getMovieList(searchBarInput);
    }, []);

    //visible
    return(
        // <View style={styles.container}>
            <LinearGradient colors={['#000516','#020d30']} locations={[0.5, 0.8]} 
            style={styles.linearGradient}>
                <View style={styles.content_container}>
                    <Text style={styles.search_heading}>Results for: {searchBarInput}</Text>
                    <FlatList 
                        directionalLockEnabled={true}
                        keyExtractor={(movie, i) => i}
                        data={searchResponseList}
                        renderItem={movieCard}
                    />
                </View>
            </LinearGradient>
        // </View>
    ); 

    //functions
    function movieCard({item}){
        return(
            <TouchableNativeFeedback onPress={() => navigation.navigate('MoviePage', {movieObject: item})}>
                <View style={styles.main_container}>
                    <View style={styles.movie_info_container}>
                        <Image style={styles.movie_poster} source={{uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path}}></Image>
                        <View style={{padding: 10, position: 'relative', alignSelf: 'flex-start', height: '100%'}}>
                            <TextTicker duration={6000} animationType='bounce' style={styles.movie_title_text}>{item.title}</TextTicker>
                            <Text style={{color: '#fff', height: '80%', maxWidth: '70%', marginRight: 10}}>{item.overview}</Text>
                            <Text style={{color: '#fff',bottom: 0, left: 10, position: 'absolute'}}>Released: {formatText(item.release_date)}</Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }

    function formatText(dateText){
        let yearString = '';
        for(let i = 0; i < dateText.length; i++){
            if(dateText[i] == '-'){
                return yearString;
            }
            yearString += dateText[i];
        }
    }


    function getMovieList(movieText){
        const searchWords = splitByDelimiter(movieText, ' ');
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=' + MOVIE_API_KEY + '&query=';
        //add our searchWords to the url
        for(let i = 0; i < searchWords.length; i++){
            //make sure we format for url with multiple searchWords
            if(i > 0){
                url = url + '+';
            }
            url = url + searchWords[i]; //add searchWord to url
        }
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setSearchResponseList(json.results);
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

//css
const styles = StyleSheet.create({
    main_container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    movie_info_container: {
        width: '95%', 
        maxWidth: '95%', 
        flex: 1, 
        flexDirection: 'row', 
        borderBottomColor: '#f235c9', 
        borderBottomWidth: 1, 
        paddingVertical: 10,
        alignItems: 'center',
    },
    text_container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(120, 125, 121, 0.15)', 
        height: 50, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10,
        //shadow
    },
    movie_title_text:{
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',

    },
    movie_poster: {
        // width: '100%', 
        width: '50%',
        height: 300, 
        backgroundColor: 'blue',
        // borderRadius: 10,
    },
    search_heading: {
        color: '#f235c9', 
        fontSize: 30, 
        marginBottom: 20
    },
    container: {
        flex: 1, 
        justifyContent: 'center', 
        backgroundColor: '#211f1f',
        // width: '100%'
    },
    content_container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',  
        marginTop: 20,
    },
    movie_card: {
        flex: 1,
        flexDirection: 'col',
        marginVertical: 5,
        // padding: 10,
        // width: '100%',
        //shadow
        // shadowColor: '#f235c9',
        // shadowRadius: 2,
        // shadowOpacity: 0.4,
        // // elevation: 2,
        // shadowOffset: {
        // width: -2,
        // height: 4
        // },
    },
    linearGradient: {
        flex: 1,
        height: '100%',
        // width: '100%'
    },

});

