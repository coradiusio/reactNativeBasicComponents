import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default class TitleFloatCard extends React.PureComponent {

  render () {
    const { title, subtitle, content, footer } = this.props
    return (
      <View style={styles.cardBaseStyler}>
        <Text style={styles.titleStyler}>
          {title}
        </Text>
        <Text style={styles.subtitleStyler}>
          {subtitle}
        </Text>
        <ScrollView>
          {content}
        </ScrollView>
        <View style={styles.footerStyler} />
        {footer}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardBaseStyler: {
    marginTop: 40,
    padding: 12,
    minHeight: 328,
    backgroundColor: 'white',
    borderRadius: 10
  },
  titleStyler: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#f0902a',
    marginTop: -30,
    color: '#fdecd5'
  },
  subtitleStyler: {
    backgroundColor: '#f0902a',
    color: '#fdecd5',
    padding: 12
  },
  footerStyler: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  }
})