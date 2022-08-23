import { Alert, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const STICKY_PANEL_HEIGHT = 250;

export function logThis(text){
    Alert.alert(text);
}
export function splitByDelimiter(string, delimiter){
    let splitString = [];
    let tempString = '';
    for(let i = 0; i <= string.length; i++){
        if(string[i] === delimiter){
            splitString.push(tempString);
            tempString = '';
        } else if(i === string.length){
            splitString.push(tempString);
        } else {
            tempString = tempString + string[i];
        }
    }
    return splitString;
} 