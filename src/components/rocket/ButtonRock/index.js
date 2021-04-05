import React from 'react'
import {Pressable,View, Text} from 'react-native'
import styles from './styles'
const ButtonRocket = (props) => {
    const {type, content, onPress} = props;

    const  backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFFF';
    const textColor = type === 'primary' ? '#FFFFFFFF' : '#171A20CC';
    return (
     
        <View style={styles.container}> 
        <Pressable
         style={[styles.button, {backgroundColor: backgroundColor}]}
         onPress={() => onPress()}
        >
            <Text style={[styles.text, {color: textColor}]} >{content}</Text>

        </Pressable>
      </View>
    )
}


export default ButtonRocket;