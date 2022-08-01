import { Text, ScrollView, StyleSheet, View, Image, Dimensions} from "react-native";
import {useState, useEffect} from "react";
const {width} = Dimensions.get('window');
const height = width * 100 / 90;

export default function Carousel(){
    //state & variables
    const imgData = [
        'https://cdn.dribbble.com/users/9378043/screenshots/16832559/netflix__1__4x.png',
        'https://cdn.pastemagazine.com/www/articles/2020/01/02/prime-video-logo.png',
        'https://www.shortlist.com/media/imager/202002/45711-product_widget.large.png'
    ];
    return(
            <ScrollView pagingEnabled horizontal style={{width, height}}>
                {
                    imgData.map((image, index) => {
                        return(
                            <Image
                                key={index}
                                source={{uri: image}}
                                style={styles.backgroundImage}
                            />
                        );
                    })
                }

            </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        // width: '100%',
        width: width,
        height: height,
        // height: '100%',
    }

});