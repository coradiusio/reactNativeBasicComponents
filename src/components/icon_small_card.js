import React from 'react'

import { Text, View, StyleSheet, PixelRatio } from 'react-native'
import Icon from './icon'

export default class SmallCard extends React.PureComponent {
  render () {
    const { iconType, title, content, footer, style } = this.props
    return (
      <View style={style}>
        <Text style={styles.titleStyler}><Icon name={iconType} />{` ${title}`}</Text>
        <Text style={styles.contentStyler}>{content}</Text>
        <Text style={styles.footerStyler}><Icon name={'sync'} style={styles.syncIconStyler} />{footer}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentStyler: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(29),
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(10)
  },
  titleStyler: {
    textAlign: 'center',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(18),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10)
  },
  footerStyler: {
    textAlign: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(30),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(15)
  },
  syncIconStyler: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(18)
  }
})