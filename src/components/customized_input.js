import React from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import {
  MKTextField,
  MKColor
} from 'react-native-material-kit'

import Icon from './icon'
import Label from './label'

import {
  colors
} from '../constants'

export default class CustomizedInput extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      hideInputField: false,
      inputBlurred: true,
      inputFocused: false
    }
  }

  componentDidMount () {
    if (this.props.defaultValue) {
      this.setState({ value: this.props.defaultValue })
    }
  }

  _handleStateValue (state, value) {
    this.setState({ [state]: value })
  }

  _handleMultipleStateValue (objects) {
    this.setState(objects)
  }

  render () {
    const {
      placeholder,
      leftIconName,
      leftIconType,
      leftIconSize,
      leftIconColor,
      leftIconStyle,
      inputStyle,
      labelStyle,
      rightEditIconName,
      rightEditIconType,
      rightEditIconSize,
      rightEditIconColor,
      rightEditIconStyle,
      rightSaveIconName,
      rightSaveIconType,
      rightSaveIconSize,
      rightSaveIconColor,
      rightSaveIconStyle
    } = this.props

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
        {
          !this.state.hideInputField
            ? <MKTextField
              tintColor={MKColor.Silver}
              value={this.state.value}
              textInputStyle={{ color: MKColor.Grey }}
              placeholder={placeholder || ''}
              style={[styles.textfield, inputStyle]}
              floatingLabelEnabled
              onFocus={() => this._handleMultipleStateValue({ inputFocused: true, inputBlurred: false })}
              onBlur={() => this._handleMultipleStateValue({ inputFocused: false, inputBlurred: true })}
              onTextChange={(value) => this._handleStateValue('value', value)}
              keyboardType='numeric'
            />
            : <Label
              text={this.state.value}
              textStyle={[styles.labelTextStyle, labelStyle]}
            />
        }
        {
          !this.state.hideInputField && this.state.inputFocused
            ? <View style={[styles.rightIconContainer, rightSaveIconStyle]}>
              <Icon
                name={rightSaveIconName}
                size={rightSaveIconSize}
                color={rightSaveIconColor || 'black'}
                type={rightSaveIconType || 'material-community'}
                onPress={() => this._handleStateValue('hideInputField', true)}
              />
            </View>
            : null
        }
        {
          this.state.hideInputField || this.state.inputBlurred
            ? <View style={[styles.rightIconContainer, rightEditIconStyle, this.state.hideInputField ? { marginBottom: 0 } : {}]}>
              <Icon
                name={rightEditIconName}
                size={rightEditIconSize}
                color={rightEditIconColor || 'black'}
                type={rightEditIconType || 'material-community'}
                onPress={() => this._handleStateValue('hideInputField', false)}
              />
            </View>
            : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  leftIconContainer: {
    marginRight: 8,
    marginBottom: 5
  },
  rightIconContainer: {
    marginLeft: 8,
    marginBottom: 5
  },
  textfield: {
    flex: 1
  },
  labelTextStyle: {
    color: colors.green
  }
})
