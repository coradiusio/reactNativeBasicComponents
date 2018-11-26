import React from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import {
  colors
} from '../constants'

export default class Bar extends React.PureComponent {
  render () {
    return (
      <View style={[styles.container, this.props.style]} elevation={this.props.elevation || 1} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryYellow,
    width: 40,
    height: 12,
    marginRight: 8
  }
})
