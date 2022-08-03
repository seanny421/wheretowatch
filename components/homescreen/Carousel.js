import { Text, ScrollView, StyleSheet, View, Image, Dimensions} from "react-native";
import {useState, useEffect} from "react";
import Slideshow from 'react-native-slideshow-improved';
const {width} = Dimensions.get('window');
const height = width * 100 / 90;

export default function Carousel(){
    //state & variables
    const [position, setPosition] = useState(0);
    const imgData = [
        {
            url: require('../../assets/home_backgrounds/netflix-n-logo-png-itv-america-82897.png')
        },
        {
            url: 'https://cdn.pastemagazine.com/www/articles/2020/01/02/prime-video-logo.png'
        },
        {
            url: 'https://www.shortlist.com/media/imager/202002/45711-product_widget.large.png'
        },
    ];
    //run once on component mount
    useEffect(()=>{
        //move position of carousel images by 1 every 5 seconds
        //if we are on last image go back to first
        setTimeout(() =>{
            setPosition(position >= imgData.length ? 0 : position + 1);
        }, 5000);
    }, [position]);

    return(
        <View pointerEvents="none" style={styles.backgroundImage}>
            {/* https://github.com/R3D347HR4Y/react-native-slideshow */}
            {/* image source works with png */}
            <Slideshow
                dataSource={imgData}
                position={position}
                scrollEnabled={false}
                indicatorSize={0}
                arrowSize={0}
                // onPositionChanged={position => setPosition({ position })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
