import React from 'react';

import {
  View,
  TextInput as ReactTextInput,
  StyleSheet,
} from 'react-native';

import {
  colors
} from '../constants';

export default class TextInput extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ReactTextInput
          placeholderTextColor={colors.grey}
          style={styles.inputStyle}
          selectionColor={colors.primary}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    flex: 1,
    alignItems: 'center',
  }
});
