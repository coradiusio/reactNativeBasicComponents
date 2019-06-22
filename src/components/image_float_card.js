import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ImageFloatCard extends React.PureComponent {

  render () {
    const { headerComponent, title, content, footer } = this.props
    return (
        <View style={styles.cardBaseStyle}>
          <View style={styles.headerStyler}>
            {headerComponent}
          </View>
          <Text style={styles.titleStyler}>{title}</Text>
          <View>
            <Text style={styles.contentStyler}>{content}</Text>
            <View style={styles.hrTagStyler} />
            <Text style={styles.footerStyler}>{footer} </Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  cardBaseStyle: {
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  headerStyler: {
    elevation: 5,
    borderColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    marginTop: -20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#6ace6c'
  },
  titleStyler:{
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 10
  },
  contentStyler: {
    textAlign: 'center'
  },
  hrTagStyler: {
      borderBottomColor: 'grey',
      borderBottomWidth: 0.5,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20
  },
  footerStyler: {
      fontSize: 14,
      textAlign: 'center',
      paddingTop: 12,
      paddingBottom: 12
  }
})