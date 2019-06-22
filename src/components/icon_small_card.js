import React from 'react'

import { Text, View, StyleSheet } from 'react-native'
import Icon from './icon'

export default class SmallCard extends React.PureComponent {
  render () {
    const { iconType, title, content, footer, style } = this.props
    return (
      <View style={style}>
        <Text style={styles.titleStyler}><Icon type={'ant-design'} name={iconType} />{` ${title}`}</Text>
        <Text style={styles.contentStyler}>{content}</Text>
        <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 15 }}><Icon type={'ant-design'} name={'sync'} style={{ fontSize: 18 }} />{footer}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contentStyler: {
    fontSize: 29,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 10
  },
  titleStyler: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10
  },
  footerStyler: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15
  },
  syncIconStyler: {
    fontSize: 18
  }
})