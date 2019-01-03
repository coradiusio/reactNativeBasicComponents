import React from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import {
  colors
} from '../constants'

import Title from './title'

export default class CircularButton extends React.PureComponent {
  render () {
    return (
      <View
        style={[styles.container, this.props.style]}
      >
        <Title
          style={[styles.textStyle, this.props.textStyle]}
          text={this.props.label}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.green,
    padding: 9,
    paddingLeft: 12,
    paddingRight: 12,
    minWidth: 70,
    marginRight: 16
  },
  textStyle: {
    color: colors.blueG80,
    textAlign: 'center',
    fontSize: 14
  }
})
