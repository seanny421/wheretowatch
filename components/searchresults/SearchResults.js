//imports
import { MOVIE_API_KEY } from '@env';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
        <View style={styles.container}>
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
        </View>
    ); 

    //functions
    function movieCard({item}){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.movie_card}>
                    <View style={{borderTopRightRadius: 10, borderTopLeftRadius: 10, overflow: 'hidden'}}>
                        <Image style={styles.movie_poster} source={{uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path}}/>
                    </View>
                    <View style={{overflow: 'hidden', borderBottomRightRadius: 10, borderBottomLeftRadius: 10}} >
                        <BlurView intensity={10} style={styles.text_container}>
                            <TextTicker scrollSpeed={80} numberOfLines={1} style={styles.movie_title_text}>{item.title}</TextTicker>
                        </BlurView>

                    </View>
                </View>
            </View>
        );
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
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',

    },
    movie_poster: {
        width: '100%', 
        height: 100, 
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
        width: '100%'
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
        padding: 10,
        width: '90%',
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
        width: '100%'
    },

});

