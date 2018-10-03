import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import SVGImage from 'react-native-remote-svg'

import Title from './title';
import SubTitle from './sub_title';

const leftImageDimension = 40;
const rightImageDimension = 20;

export default class TilesListItem extends React.PureComponent {
  render() {
    const {
      icon,
      imageURL,
      imageWidth,
      imageHeight,
      rightIcon,
      rightImageURL,
      rightImageWidth,
      rightImageHeight,
      title,
      subtitle,
      contentStyle,
      titleContainerStyle,
      subtitleContainerStyle,
      titleStyle,
      subtitleStyle,
      titleType,
      subtitleType,
      containerStyle,
      elevation
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]} elevation={elevation || 0}>
        {
          icon || imageURL
          ?
            <View style={[styles.imageContainerStyle, { width: imageWidth || leftImageDimension, height: imageHeight || leftImageDimension }]}>
              {
                icon || 
                <SVGImage
                  style={[styles.imageStyle, { width: imageWidth || leftImageDimension, height: imageHeight || leftImageDimension }]}
                  source={{uri:imageURL}}
                />
              }
            </View>
          :
            null
        }
        <View style={contentStyle}>
          {
            title
            ?
              <View style={titleContainerStyle}>
                {
                  typeof title === 'string'
                  ?
                    <Title
                      text={title}
                      style={titleStyle}
                      type={titleType}
                    />
                  :
                    title
                }
              </View>
            :
              null
          }
          {
            subtitle
            ?
              <View style={subtitleContainerStyle}>
                {
                  typeof subtitle === 'string'
                  ?
                    <SubTitle
                      style={[styles.subtitle, subtitleStyle]}
                      text={subtitle}
                      type={subtitleType}
                    />
                  :
                    this.props.subtitle
                }
              </View>
            :
              null
          }
        </View>
        {
          rightIcon || rightImageURL
          ?
            <View style={[styles.rightImageContainerStyle, { width: rightImageWidth || rightImageDimension, height: rightImageHeight || rightImageDimension }]}>
              {
                rightIcon || 
                <SVGImage
                  style={[styles.rightImageStyle, { width: rightImageWidth || rightImageDimension, height: rightImageHeight || rightImageDimension }]}
                  source={{uri:rightImageURL}}
                />
              }
            </View>
          :
            null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8
  },
  imageContainerStyle: {
    marginRight: 16,
    alignItems: 'center',
    width: 40,
    height: 40
  },
  imageStyle: {
    backgroundColor: 'transparent',
  },
  subtitle: {
    maxWidth: 210
  },
  rightImageContainerStyle: {
    marginLeft: 16,
    width: rightImageDimension,
    height: rightImageDimension,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1
  },
  rightImageStyle: {
    backgroundColor: 'transparent',
  }
});