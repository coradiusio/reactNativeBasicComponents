import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TabFloatCard extends React.PureComponent {

  render () {
    const { title, children } = this.props
    return (
      <View style={styles.cardBaseStyle}>
        <Text style={styles.titleStyler}>
          {title}
        </Text>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardBaseStyle: {
    marginTop: 40,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    minHeight: 328
  },
  titleStyler:{
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#aa57ba',
    marginTop: -30,
    paddingTop: 12,
    paddingBottom: 12,
    color: 'white'
  }
})