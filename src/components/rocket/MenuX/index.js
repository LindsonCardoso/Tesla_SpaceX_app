
import * as React from 'react';
import { ContainerIcon,ContainerIconExit,Container ,Logo,ImgView} from './styles'
import { IconButton, Colors} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native'
import { StyleSheet} from 'react-native';

export default function MenuX() {

  //iniciando navegação com drawer
  const navigation = useNavigation();
  const HandleOnPress  = () => {
    navigation.navigate('Home')
  }

  return (
    //extende a area toda em ios
    <>

    <Container>  

    <ContainerIcon>
        <IconButton
        icon="menu"
        color={Colors.white}
        size={20}
        onPress={() => navigation.openDrawer()}
      />   
   </ContainerIcon>



   <Logo style={styles.img} source={require('../../../images/ROCKETS/spacex.png')}/>
    
      <ContainerIconExit>
        <IconButton
        icon="car"
        color={Colors.white}
        size={20}
        onPress={HandleOnPress}
      
      />   
   </ContainerIconExit>

   </Container>


      </>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 15,
    resizeMode: 'contain',
    flex: 1,
    justifyContent: 'center',
  },
});