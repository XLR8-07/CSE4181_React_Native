import React from 'react';
import {Text,View} from 'react-native';
import styles from './HomePage.style.js';
import SafeAreaView from 'react-native-safe-area-view';

const HomeScreen = () =>{
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View><Text style={styles.textContainer}>Hello World</Text></View>
        </SafeAreaView>
    )
}

export default HomeScreen;