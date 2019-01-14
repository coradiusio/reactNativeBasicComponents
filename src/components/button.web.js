import React from 'react'

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

export default class ButtonComponent extends React.PureComponent {
  render () {
    return (
        
          <View style={[styles.buttonContainer, this.props.buttonContainerStyle]}>
          <TouchableOpacity
            style={[styles.button, this.props.buttonStyle]}
            {...this.props}
          >
            <Text style={[styles.text, this.props.textStyle]}>{this.props.text.toUpperCase()}</Text>
        </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
  },
  button: {
    height: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.7,
    shadowColor: '#000000'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  }
})
