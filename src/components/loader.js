import React from 'react'

import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

import {
  colors
} from '../constants'

export default class Loader extends React.PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          color={this.props.color}
          size={this.props.size}
          animating
        />
      </View>
    )
  }
}

Loader.defaultProps = {
  color: colors.primary,
  size: 'large'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
