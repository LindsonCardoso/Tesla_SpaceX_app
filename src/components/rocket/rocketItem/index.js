import React, {useState, useEffect} from 'react'
import {ImageBackground,View, Text,Dimensions} from 'react-native'
import styles from './styles'
import ButtonRocket from '../../rocket/ButtonRock'

const RocketItem = (props) => {


    const {name,tagline, image} = props.rocket;
 

  
  return (
     
        <View style={styles.carContainer}> 
        <ImageBackground
        source={image}
        
        style={styles.image}/>
      
          <View style={styles.titles}> 
  
            <Text style={styles.title}>{name}</Text>
  
            <Text style={styles.subtitle}>
              {tagline}
            </Text>
                  
         </View>


      <View style={styles.butttonContainer}>

       <ButtonRocket 
          type="secundary" 
          content={"Visualizar"} 
          onPress={()=> {{
            console.warn("Visualizar")
          }}} /> 


     



      </View>

      </View>
    )
}


export default RocketItem;