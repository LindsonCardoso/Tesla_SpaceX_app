
import * as React from 'react';

import { Container } from './styles';

import  Menu  from '../../components/card/Menu';
import { Text,View,Dimensions} from 'react-native';

import CardList from '../../components/card/cardList';
export default function Home() {
  return (
    <>

    <Container   >
    <Menu/>
    <CardList/>

    </Container>

    </>
  );
}

