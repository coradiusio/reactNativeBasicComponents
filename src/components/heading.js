import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import Typography from './typography';

import {
  colors
} from '../constants';

export default class Heading extends React.PureComponent {
  render() {
    return (
      <Typography
        style={[styles.heading, this.props.style]}
        type='title'
        text={this.props.text}
      />
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: colors.black
  }
});

