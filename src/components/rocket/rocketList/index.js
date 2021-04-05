
import * as React from 'react';
import styles from './styles'
import {FlatList,View,Dimensions} from 'react-native';

import rockets from '../rocketList/rockets'
import RocketItem from '../rocketItem'

const rocketList = (props) => {
  return (
    <View styles={styles.container}>
    <FlatList
    
        data={rockets}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <RocketItem rocket={item}/>}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
    />
</View>
  );
}

export default rocketList;