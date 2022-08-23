//imports
import { MOVIE_API_KEY } from '@env';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { splitByDelimiter } from '../../Constants';

//view
export default function SearchResults({route, navigation}){
    //state and variables
    const { searchBarInput } = route.params;
    // list of json objects return from api call 
    const [ searchResponseList, setSearchResponseList ] = useState();

    //run once on component load
    useEffect(() => {
        setSearchResponseList(getMovieList(searchBarInput))
    });

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black'}}>{searchBarInput}</Text>
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
    return fetch(url)
    .then((response) => response.json())
    .then((json) => {
        return json.results;
    })
    .catch((error) => {
        console.error(error);
    });
}

