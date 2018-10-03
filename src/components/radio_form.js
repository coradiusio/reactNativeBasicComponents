import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {
  colors
} from '../constants';

export default class RadioFormComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initial || ''
    }
    this.onPress = this.onPress.bind(this);
  }

  onPress(value) {
    this.setState({ value });
  }
  
  render() {
    const {
      radio_props,
      buttonColor,
      buttonSize,
      buttonOuterSize,
      borderWidth,
      radioWrapStyle
    } = this.props;

    return (
      <View>
        <RadioForm
          formHorizontal={false}
          animation={true}
        >
          {radio_props && radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i} style={[styles.radioStyle, radioWrapStyle]}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={this.state.value === obj.value}
                onPress={this.onPress}
                borderWidth={borderWidth || 2}
                buttonInnerColor={buttonColor || colors.blueG80}
                buttonOuterColor={buttonColor || colors.blueG80}
                buttonSize={buttonSize || 10}
                buttonOuterSize={buttonOuterSize || 20}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={this.onPress}
                labelStyle={styles.labelStyle}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    color: colors.blueG80
  },
  radioStyle: {
    marginTop: 8,
    marginBottom: 8
  }
});