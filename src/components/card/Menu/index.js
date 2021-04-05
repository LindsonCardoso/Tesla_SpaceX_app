
import * as React from 'react';
import { ContainerIcon,ContainerIconExit,Container ,Logo,ImgView} from './styles'
import { IconButton, ExiButton, Colors} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native'
import { Text,View,Image,StyleSheet} from 'react-native';
import Rockets from '../../rocket/MenuX'
export default function Menu() {

  //iniciando navegação com drawer
  const navigation = useNavigation();
  const HandleOnPress  = () => {
    navigation.navigate('Rockets')
  }

  return (
    //extende a area toda em ios
    <>

    <Container>  

    <ContainerIcon>
        <IconButton
        icon="menu"
        color={Colors.black}
        size={20}
        onPress={() => navigation.openDrawer()}
      />   
   </ContainerIcon>



   <Logo style={styles.img} source={require('../../../images/logo.png')}/>
    
      <ContainerIconExit>
        <IconButton
        icon="rocket"
        color={Colors.black}
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
    height: 14,
    resizeMode: 'contain',
    flex: 1,
    marginTop: 4,
    justifyContent: 'center',
  },
});