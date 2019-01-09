import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  MKButton
} from 'react-native-material-kit'

export default class ButtonComponent extends React.PureComponent {
  render () {
    return (
      <View style={[styles.buttonContainer, this.props.buttonContainerStyle]}>
        <MKButton
          backgroundColor={this.props.buttonBackgroundColor}
          shadowRadius={2}
          shadowOffset={styles.buttonShadowOffset}
          shadowOpacity={.7}
          shadowColor='black'
          style={[styles.button, this.props.buttonStyle]}
          {...this.props}
          >
          <Text pointerEvents='none' style={[styles.text, this.props.textStyle]}>
            {this.props.text.toUpperCase()}
          </Text>
        </MKButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
  },
  buttonShadowOffset: {
    width: 0,
    height: 2
  },
  button: {
    height: 48,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})
