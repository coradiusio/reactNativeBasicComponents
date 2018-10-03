import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import Typography from './typography';

import {
  colors
} from '../constants';

export default class SubTitle extends React.PureComponent {
  render() {
    return (
      <Typography
        style={[styles.sub_title, this.props.style]}
        type={this.props.type}
        text={this.props.text}
      />
    );
  }
}

SubTitle.defaultProps = {
  type: 'body1'
}

const styles = StyleSheet.create({
  sub_title: {
    color: colors.blueG60
  }
});

