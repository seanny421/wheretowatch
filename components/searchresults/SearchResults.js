//imports
import { MOVIE_API_KEY } from '@env';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
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
                        keyExtractor={(movie) => movie.poster_path}
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
            <View style={styles.movie_card}>
                <Image style={{width: '30%', height: 50, backgroundColor: 'blue'}} source={{uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path}}/>
                <Text style={{color: '#fff'}}>{item.title}</Text>
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
    search_heading: {
        color: '#f235c9', 
        fontSize: 20, 
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
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        width: '85%',
        borderBottomColor: '#f235c9',
        borderBottomWidth: 2,
    },
    linearGradient: {
        flex: 1,
        height: '100%',
        width: '100%'
    },

});

