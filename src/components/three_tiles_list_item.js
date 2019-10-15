import React from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import SVGImage from 'react-native-remote-svg'

import Title from './title'
import SubTitle from './sub_title'

import {
  colors
} from '../constants'

const leftImageDimension = 40
const rightImageDimension = 20

export default class ThreeTilesListItem extends React.PureComponent {
  render () {
    const {
      leftIcon,
      leftImageURL,
      leftImageWidth,
      leftImageHeight,
      rightIcon,
      rightImageURL,
      rightImageWidth,
      rightImageHeight,
      rightComponent,
      title,
      subtitleFirst,
      subtitleSecond,
      contentStyle,
      titleContainerStyle,
      subtitleFirstContainerStyle,
      subtitleSecondContainerStyle,
      titleStyle,
      subtitleFirstStyle,
      subtitleSecondStyle,
      titleType,
      subtitleFirstType,
      subtitleSecondType,
      containerStyle,
      elevation,
      rightComponentContainerStyle
    } = this.props

    return (
      <View style={[styles.container, containerStyle]} elevation={elevation || 0}>
        {
          leftIcon || leftImageURL
            ? <View style={[styles.leftImageContainerStyle, { width: leftImageWidth || leftImageDimension, height: leftImageHeight || leftImageDimension }]}>
              {
                leftIcon ||
                <SVGImage
                  style={[styles.leftImageStyle, { width: leftImageWidth || leftImageDimension, height: leftImageHeight || leftImageDimension }]}
                  source={{ uri: leftImageURL }}
                />
              }
            </View>
            : null
        }
        <View style={contentStyle}>
          {
            title
              ? <View style={titleContainerStyle}>
                {
                  typeof title === 'string'
                    ? <Title
                      text={title}
                      style={titleStyle}
                      type={titleType}
                    />
                    : title
                }
              </View>
              : null
          }
          {
            subtitleFirst
              ? <View style={subtitleFirstContainerStyle}>
                {
                  typeof subtitleFirst === 'string'
                    ? <SubTitle
                      style={[styles.subtitleFirst, subtitleFirstStyle]}
                      text={subtitleFirst}
                      type={subtitleFirstType}
                    />
                    : this.props.subtitleFirst
                }
              </View>
              : null
          }
          {
            subtitleSecond
              ? <View style={subtitleSecondContainerStyle}>
                {
                  typeof subtitleSecond === 'string'
                    ? <SubTitle
                      style={[styles.subtitleSecond, subtitleSecondStyle]}
                      text={subtitleSecond}
                      type={subtitleSecondType}
                    />
                    : this.props.subtitleSecond
                }
              </View>
              : null
          }
        </View>
        {
          rightIcon || rightImageURL
            ? <View style={[styles.rightImageContainerStyle, { width: rightImageWidth || rightImageDimension, height: rightImageHeight || rightImageDimension }]}>
              {
                rightIcon ||
                <SVGImage
                  style={[styles.rightImageStyle, { width: rightImageWidth || rightImageDimension, height: rightImageHeight || rightImageDimension }]}
                  source={{ uri: rightImageURL }}
                />
              }
            </View>
            : null
        }
        {
          rightComponent
            ? <View style={[styles.rightComponentContainerStyle, rightComponentContainerStyle]}>
              {rightComponent}
            </View>
            : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.blueG20,
    position: 'relative'
  },
  leftImageContainerStyle: {
    marginRight: 16,
    width: leftImageDimension,
    height: leftImageDimension
  },
  leftImageStyle: {
    backgroundColor: 'transparent'
  },
  rightImageContainerStyle: {
    marginLeft: 16,
    width: rightImageDimension,
    height: rightImageDimension,
    position: 'absolute',
    right: 16,
    top: 16
  },
  rightImageStyle: {
    backgroundColor: 'transparent'
  },
  rightComponentContainerStyle: {
    marginLeft: 16,
    position: 'absolute',
    right: 16,
    top: 16
  }
})
