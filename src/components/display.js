import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Container, Content, Header, Title, Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { LifeCounter } from './life_counter';
import { ME, YOU } from '../constants';

export class Display extends Component {
  static propTypes = {
    lifeTotals: PropTypes.shape({
      [ME]: PropTypes.number.isRequired,
      [YOU]: PropTypes.number.isRequired,
    }).isRequired,
    onLifeTotalChange: PropTypes.func.isRequired,
  };

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
              <LifeCounter
                lifeTotal={this.props.lifeTotals[ME]}
                onLifeTotalChange={this.props.onLifeTotalChange.bind(this, ME)}
              />
            </Col>
            <Col>
              <LifeCounter
                lifeTotal={this.props.lifeTotals[YOU]}
                onLifeTotalChange={this.props.onLifeTotalChange.bind(this, YOU)}
              />
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
