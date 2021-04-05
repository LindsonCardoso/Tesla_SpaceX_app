import * as React from 'react';
import {StyleSheet,Image} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import Rockets from './pages/Rockets';

const Drawer = createDrawerNavigator();

function MyDrawer() {

  return (


    <Drawer.Navigator 
    drawerPosition="left"
    drawerContentOptions={{
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
    }}
    drawerStyle={{backgroundColor: 'transparent'}} //or here
    initialRouteName="Splash"
  
    >
      <Drawer.Screen style={{ color: '#FFF'}}
        name="Home"
        component={Home}
         
        options={{
        
          title: 'Tesla Cars',
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../src/images/ROCKETS/car.png')}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                 { height: size, width: '12%', left: 10,}]}
            />
            ),
         }} 
      
         
         />



        <Drawer.Screen 
          name="Rockets"
         component={Rockets}
         options={{
           title: 'SpaceX',
           drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../src/images/rocket.png')}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                 { color: '#FFF' ,height: size, width: size, left: 10,}]}
            />
            ),
         }} />
    </Drawer.Navigator>

    
  );

}

export default MyDrawer;


const styles = StyleSheet.create({
  home: {
 
  
  }
});
