import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
      width: '100%',
      height: Dimensions.get('screen').height,
    },
  
    titles: {
  
      marginTop: '40%',
      width: '100%',
      alignItems: 'center',
  
  
    },
    title: {
      fontSize:40,
      fontWeight: 'bold',
  
    },
    subtitle: {
     
      fontSize:16,
      color: '#5c4e62',
  
  
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position:'absolute',
   
    
    },
    butttonContainer: {

      position: 'absolute',
      width: '100%',
      bottom: '13%',
    },
    subtitleCTA:{

      textDecorationLine: "underline",

    }
  
  });
  

export default styles;