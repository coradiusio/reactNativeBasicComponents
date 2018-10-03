import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

export default class Table extends React.PureComponent {
  render() {
    const {
      containerStyle,
      elevation,
      headerStyle,
      headerData,
      renderHeader,
      bodyStyle,
      bodyData,
      renderBody,
      footerStyle,
      footerData,
      renderFooter,
      extraData
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]} elevation={elevation || 0}>
        <View style={[styles.header, headerStyle]}>
          {
            typeof renderHeader === 'function' && headerData instanceof Array && headerData.map((item, index) => 
              renderHeader(item, index)
            )
          }
        </View>
        <View style={[styles.body, bodyStyle]}>
          {
            typeof renderBody === 'function' && bodyData instanceof Array && bodyData.map((item, index) => 
              renderBody(item, index, extraData)
            )
          }
        </View>
        <View style={[styles.footer, footerStyle]}>
          {
            typeof renderFooter === 'function' && footerData instanceof Array && footerData.map((item, index) => 
              renderFooter(item, index)
            )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row'
  },
  footer: {
    flexDirection: 'row'
  }
});