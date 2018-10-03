import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import Dash from 'react-native-dash';

import {
  colors
} from '../constants';

import Icon from './icon';

export default class VerticalStepper extends React.PureComponent {
  render() {
    const {
      data,
      step,
      renderComponent
    } = this.props;

    const stepsElement = [];

    data instanceof Array && data.map((item, index) => {
      if (index !== data.length - 1) {
        stepsElement.push(
          <Icon key={index} name='check-circle' type='material-community' size={20} color={index < step ? colors.green : colors.blueG20} />
        )
        stepsElement.push(
          <Dash
            key={`dash-${index}`}
            style={styles.dashStyle}
            dashColor={index < step ? colors.green : colors.blueG20}
          />
        );
      } else {
        stepsElement.push(
          <Icon key={index} name='check-circle' type='material-community' size={20} color={index < step ? colors.green : colors.blueG20} />
        )
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          {stepsElement}
        </View>
        <View style={styles.tileContainer}>
          {
            renderComponent && data instanceof Array && data.map((item, index) => (
              renderComponent(item, index)
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  circleContainer: {
    marginRight: 16,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dashStyle: {
    width:1,
    height: 80,
    flexDirection:'column'
  },
  tileContainer: {
    justifyContent: 'flex-start'
  }
});

