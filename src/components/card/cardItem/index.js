import React, {useState, useEffect} from 'react'
import {ImageBackground,View, Text,Dimensions} from 'react-native'
import styles from './styles'
import StyledButton from '../../StylesButton/index'

const CardItem = (props) => {


    const {name,tagline, taglineCTA, image} = props.car;
 

  
  return (
     
        <View style={styles.carContainer}> 
        <ImageBackground
        source={image}
        
        style={styles.image}/>
      
          <View style={styles.titles}> 
  
            <Text style={styles.title}>{name}</Text>
  
            <Text style={styles.subtitle}>
              {tagline} {' '}
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
            </Text>
                  
         </View>


      <View style={styles.butttonContainer}>

       <StyledButton 
          type="primary" 
          content={"Visualizar Carro"} 
          onPress={()=> {{
            console.warn("Visualizar Carro")
          }}} /> 


     



      </View>

      </View>
    )
}


export default CardItem;