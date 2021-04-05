import React from 'react'
import styles from './styles'
import {View, FlatList,Dimensions} from 'react-native'

import cars from './cars';
import CardItem from '../cardItem'


const CardList = (props) => {

    return (
        <View styles={styles.container}>
            <FlatList
            
                data={cars}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <CardItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    )
}


export default CardList;
