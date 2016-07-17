/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { Container, Content, Header, Title } from 'native-base';

class MtgLifeCounter extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>MTG Life Counter</Title>
        </Header>
        <Content>
          <Text>Hello, World!</Text>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('MtgLifeCounter', () => MtgLifeCounter);
