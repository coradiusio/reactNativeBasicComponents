import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import Typography from './typography';

import {
  colors
} from '../constants';

export default class Title extends React.PureComponent {
  render() {
    return (
      <Typography
        style={[styles.title, this.props.style]}
        type={this.props.type}
        text={this.props.text}
      />
    );
  }
}

Title.defaultProps = {
  type: 'subheading'
}

const styles = StyleSheet.create({
  title: {
    color: colors.blueG80
  }
});

