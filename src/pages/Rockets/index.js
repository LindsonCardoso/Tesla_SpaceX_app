
import * as React from 'react';

import { Container } from './styles';

import  MenuX  from '../../components/rocket/MenuX';
import { Text,View,Dimensions} from 'react-native';

import RocketList from '../../components/rocket/rocketList';

export default function Rockets() {
  return (
    <>

    <Container >
    <MenuX/>
    <RocketList />
    </Container>

    </>
  );
}

