import React from 'react'

import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import ZocialIcon from 'react-native-vector-icons/Zocial'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

const AllIcons = {
  'ant-design': AntDesignIcon,
  'font-awesome': FAIcon,
  'entypo': EntypoIcon,
  'material-community': MaterialCommunityIcon,
  'material-icon': MaterialIcon,
  'zocial': ZocialIcon,
  'ion': IonIcon,
  'evil': EvilIcon
}

export default class Icon extends React.PureComponent {
  render () {
    const IconComponent = AllIcons[this.props.type]
    let element
    if (IconComponent) {
      element = <IconComponent {...this.props} />
    } else {
      element = null
    }
    return element
  }
}
