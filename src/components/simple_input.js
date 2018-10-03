import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {
  MKTextField,
  MKColor
} from 'react-native-material-kit';

import Icon from './icon';
import {
  colors
} from '../constants';

export default class SimpleInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({ value: this.props.defaultValue });
    }
  }

  _handleStateValue(state, value) {
    this.setState({ [state]: value });
  }

  render() {
    const {
      placeholder,
      leftIconName,
      leftIconType,
      leftIconSize,
      leftIconColor,
      leftIconStyle,
      inputStyle,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.leftIconContainer, leftIconStyle, this.state.hideInputField ? { marginBottom: 0 } : {}]}>
          <Icon
            name={leftIconName}
            size={leftIconSize}
            color={leftIconColor || 'black'}
            type={leftIconType || 'material-community'}
          />
        </View>
        <MKTextField
          tintColor={MKColor.Silver}
          value={this.state.value}
          textInputStyle={{color: MKColor.Grey}}
          placeholder={placeholder || ''}
          style={[styles.textfield, inputStyle]}
          onTextChange={(value) => this._handleStateValue('value', value)}
          keyboardType='numeric'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  leftIconContainer: {
    marginRight: 8,
    marginBottom: 5
  },
  textfield: {
    flex: 1
  },
  labelTextStyle: {
    color: colors.green,
  }
});