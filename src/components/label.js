import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import SVGImage from 'react-native-remote-svg';

import Typography from './typography';

export default class Label extends React.PureComponent {
  render() {
    const {
      icon,
      type,
      iconPosition,
      imageURL,
      imageWidth,
      imageHeight,
    } = this.props;

    let element = [];

    let iconElement;
    
    const textElement = (
      <Typography
        style={[styles.heading, this.props.textStyle]}
        type={type || 'title'}
        text={this.props.text}
        key={1}
      />
    );

    element.push(textElement);

    if (icon || imageURL) {
      iconElement = (
        <View style={styles.iconImageContainer} key={2}>
          {
            icon || 
            <View style={[styles.imageContainerStyle, { width: imageWidth || 40, height: imageHeight || 40 }]}>
              {
                icon || 
                <SVGImage
                  style={[styles.imageStyle, { width: imageWidth || 40, height: imageHeight || 40 }]}
                  source={{uri:imageURL}}
                />
              }
            </View>
          }
        </View>
      );
      if (iconPosition === 'right') {
        element.push(iconElement);
      } else {
        element.unshift(iconElement);
      }
    }
    
    return (
      <View style={[styles.container, this.props.style]}>
        {element}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
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
  heading: {
    marginLeft: 4,
  }
});

