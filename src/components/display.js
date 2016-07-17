import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { Container, Content, Header, Title, Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export class LifeCounterDisplay extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>MTG Life Counter</Title>
        </Header>
        <Content>
          <Button block>Reset life totals</Button>
          <Grid>
            <Col>
              <Text>20</Text>
              <Button bordered block>Increase</Button>
              <Button bordered block>Decrease</Button>
            </Col>
            <Col>
              <Text>20</Text>
              <Button bordered block>Increase</Button>
              <Button bordered block>Decrease</Button>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
