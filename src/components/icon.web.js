import React from 'react'

import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign'
import ZocialIcon from 'react-native-vector-icons/dist/Zocial'
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import EntypoIcon from 'react-native-vector-icons/dist/Entypo'
import FAIcon from 'react-native-vector-icons/dist/FontAwesome'
import IonIcon from 'react-native-vector-icons/dist/Ionicons'
import EvilIcon from 'react-native-vector-icons/dist/EvilIcons'

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(
	document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/AntDesign.ttf`)});
			font-family: AntDesign;
		}`
	)
)
style.appendChild(
	document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/Zocial.ttf`)});
			font-family: Zocial;
		}`
	)
)
style.appendChild(
  document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/MaterialIcons.ttf`)});
			font-family: MaterialIcons;
		}`
	)
)
style.appendChild(
  document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf`)});
			font-family: MaterialCommunityIcons;
		}`
	)
)
style.appendChild(
  document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/Entypo.ttf`)});
			font-family: Entypo;
		}`
	)
)
style.appendChild(
  document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/FontAwesome.ttf`)});
			font-family: FontAwesome;
		}`
	)
)
style.appendChild(
  document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/Ionicons.ttf`)});
			font-family: Ionicons;
		}`
	)
)
style.appendChild(
  document.createTextNode(
		`@font-face {
			src: url(${require(`react-native-vector-icons/Fonts/EvilIcons.ttf`)});
			font-family: EvilIcons;
		}`
	)
)

document.head.appendChild(style)

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
