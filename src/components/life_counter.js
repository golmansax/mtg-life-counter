import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

export const LifeCounter = ({ lifeTotal, onLifeTotalChange }) => (
  <View>
    <Text>{lifeTotal}</Text>
    <Button bordered block onPress={onLifeTotalChange.bind(this, 1)}>
      Increase
    </Button>
    <Button bordered block onPress={onLifeTotalChange.bind(this, -1)}>
      Decrease
    </Button>
  </View>
);

LifeCounter.propTypes = {
  lifeTotal: PropTypes.number.isRequired,
  onLifeTotalChange: PropTypes.func.isRequired,
};
