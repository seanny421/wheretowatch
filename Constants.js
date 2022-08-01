import { Dimensions, Alert } from "react-native";
const {width, height} = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const STICKY_PANEL_HEIGHT = 250;

export function logThis(text){
    Alert.alert(text);
}