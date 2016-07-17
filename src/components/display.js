import React, { PropTypes } from 'react';
import { Container, Content, Header, Title, Button } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { LifeCounter } from './life_counter';
import { ME, YOU } from '../constants';

export const Display = ({ lifeTotals, onLifeTotalChange, onLifeTotalReset }) => (
  <Container>
    <Header>
      <Title>MTG Life Counter</Title>
    </Header>
    <Content>
      <Button block onPress={onLifeTotalReset}>Reset life totals</Button>
      <Grid>
        <Col>
          <LifeCounter
            lifeTotal={lifeTotals[ME]}
            onLifeTotalChange={onLifeTotalChange.bind(this, ME)}
          />
        </Col>
        <Col>
          <LifeCounter
            lifeTotal={lifeTotals[YOU]}
            onLifeTotalChange={onLifeTotalChange.bind(this, YOU)}
          />
        </Col>
      </Grid>
    </Content>
  </Container>
);

Display.propTypes = {
  lifeTotals: PropTypes.shape({
    [ME]: PropTypes.number.isRequired,
    [YOU]: PropTypes.number.isRequired,
  }).isRequired,
  onLifeTotalChange: PropTypes.func.isRequired,
  onLifeTotalReset: PropTypes.func.isRequired,
};
