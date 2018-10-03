import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Button
} from 'react-native-material-ui';

import {
  colors
} from '../constants';

export default class ButtonComponent extends React.PureComponent {
  render() {
    return (
      <View style={[styles.buttonContainer, this.props.buttonContainerStyle]}>
        <Button
          raised
          style={this.props.style}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16
  },
});
