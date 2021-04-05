import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
      width: '100%',
      height: Dimensions.get('screen').height,
    },
  
    titles: {
  
      marginTop: '50%',
      width: '100%',
      alignItems: 'flex-start',
      color: '#FFF',
  
    },
    title: {
      fontSize:40,
      fontWeight: 'bold',
      color: '#FFF',
      paddingHorizontal: 10,
    },
    subtitle: {
      paddingHorizontal: 10,
      fontSize:16,
      color: '#FFF',
      top: 10,
  
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position:'absolute',
   
    
    },
    butttonContainer: {

      position: 'absolute',
      width: '60%',
      top: '70%',
    },
    subtitleCTA:{

      textDecorationLine: "underline",

    }
  
  });
  

export default styles;