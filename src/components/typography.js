import React from 'react'

import {
  Text
} from 'react-native'

import { material } from 'react-native-typography'

export default class Typography extends React.PureComponent {
  render () {
    const {
      type
    } = this.props

    return (
      <Text
        style={[
          type === 'overline' ? material['caption'] : material[type || 'subheading'],
          type === 'overline' ? { fontSize: 10 } : null,
          this.props.style
        ]}
        numberOfLines={this.props.numberOfLines}
      >
        {this.props.text}
      </Text>
    )
  }
}
