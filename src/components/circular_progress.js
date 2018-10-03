import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ART,
} from 'react-native';

const { Surface, Shape, Path, Group } = ART;

const sumOfObjectKeyInArray = (items, prop) => {
  return items.reduce( function(a, b){
    return a + b[prop];
  }, 0);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  innerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dotsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    right: 0,
    bottom: 30,
  },
  dot: {
    width: 7,
    height: 7,
    borderWidth:1,
    borderRadius: 7,
    backgroundColor: 'transparent',
    marginLeft: 2,
    marginRight: 2,
  }
});

const childrenFunction = (value = 0, texts_list = [], fillColor, styles, valuePrefix) => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={[styles.valueStyle, {color: fillColor ? fillColor : styles.textStyle.color}]}>{valuePrefix || ''}{typeof value === 'string' ? value : parseInt(value, 10)}</Text>
    {
      texts_list.map((text, index) => <Text key={index} style={[styles.textStyle, {color: fillColor ? fillColor : styles.textStyle.color, width: 150, textAlign: 'center'}]}>{text}</Text>)
    }
  </View>
);

export default class CircularProgress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: [],
      size: 300,
      thickness: 30,
      rotation: 0,
      fillValue: props.fillValue || 0,
      backgroundColor: '#000000',
      fillColor: '#FFFFFF',
    }
  }

  circlePath(cx, cy, radius, startDegree, endDegree, startMoveToPoint, endMoveToPoint) {
    let p = new Path();
    if (startMoveToPoint) {
      p.path.push(0, startMoveToPoint[0], startMoveToPoint[1]);
    }

    p.path.push(4, cx, cy, radius, startDegree * Math.PI / 180, endDegree * Math.PI / 180, 1);

    if (endMoveToPoint) {
      p.path.push(0, endMoveToPoint[0], endMoveToPoint[1]);
    }

    return p;
  }

  validateFillPercentage(fillPercentage) {
    if (fillPercentage < 0) {
      return 0;
    } else if (fillPercentage > 100) {
      return 100;
    }

    return fillPercentage;
  }

  validateFillValue(fillValue, maxValue) {
    if (fillValue < 0) {
      return 0;
    } else if (fillValue > maxValue) {
      return maxValue;
    }

    return fillValue;
  }

  render() {
    const {
      size,
      thickness,
      rotation,
      fillValue,
      backgroundColor,
      fillColor,
      index,
      data,
      mapping_data,
      children,
      childrenStyle,
      showSliderDots,
      dotsPositionBottom,
      valuePrefix,
      doAnimation,
      totalDots,
      staticCenterText,
      showOnlyOneFillColor,
      texts,
    } = this.props;

    let maxValue = this.props.maxValue;

    if (maxValue === undefined) {
      maxValue = sumOfObjectKeyInArray(mapping_data, 'value');
    }

    const halfSize = size / 2;
    const radius = halfSize - thickness / 2;

    const paths_data = [];

    let validatedFillValue;
    let startAngle = 0;
    let endAngle = 0;
    let circlePath;
    let texts_list;
    let startX;
    let startY;
    let endX;
    let endY;

    let runningData = 0;

    let centerTextEvaluateFunction = null;
    if (children && typeof children === 'function') {
      centerTextEvaluateFunction = children;
    } else {
      centerTextEvaluateFunction = childrenFunction;
    }

    if ((data === undefined && fillValue !== undefined) || showOnlyOneFillColor) {

      startX = halfSize + radius;
      startY = halfSize;

      validatedFillValue = this.validateFillValue(fillValue, maxValue);
      endAngle = (360 * (validatedFillValue / maxValue));

      circlePath = this.circlePath(halfSize, halfSize, radius, startAngle, endAngle, [startX, startY]);
      
      paths_data.push({
        path: circlePath,
        fillColor: (data && data[index].fillColor) || fillColor,
      });

      texts_list = (data && data[index].texts) || texts || [];
    } else {
      data.map((one_data, mainIndex) => {
        const mainIndexValue = one_data.value;
        if (doAnimation && index === mainIndex) {
          runningData += fillValue;
          validatedFillValue = this.validateFillValue(runningData, maxValue);
        } else {
          runningData += mainIndexValue;
          validatedFillValue = this.validateFillValue(runningData, maxValue);
        }
  
        startAngle = startAngle;
        endAngle = (360 * (validatedFillValue / maxValue));
        
        if (mainIndex === 0) {
          startX = halfSize + radius;
          startY = halfSize;
        } else {
          if (doAnimation && index === mainIndex) {
            startX = (radius * (1 + Math.cos((360 - (360 * ((runningData - fillValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
            startY = (radius * (1 - Math.sin((360 - (360 * ((runningData - fillValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
          } else {
            startX = (radius * (1 + Math.cos((360 - (360 * ((runningData - mainIndexValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
            startY = (radius * (1 - Math.sin((360 - (360 * ((runningData - mainIndexValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
          }
        }
  
        if (doAnimation && index === mainIndex) {
          endX = (radius * (1 + Math.cos((360 - (360 * ((runningData + fillValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
          endY = (radius * (1 - Math.sin((360 - (360 * ((runningData + fillValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
        } else {
          endX = (radius * (1 + Math.cos((360 - (360 * ((runningData + mainIndexValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
          endY = (radius * (1 - Math.sin((360 - (360 * ((runningData + mainIndexValue) / maxValue)) / 180) * Math.PI))) + (thickness / 2);
        }
  
        //console.log('startX :- ', startX, 'startY :- ', startY);
        //console.log('endX :- ', endX, 'endY :- ', endY);
  
        circlePath = this.circlePath(halfSize, halfSize, radius, startAngle, endAngle, [startX, startY], [endX, endY]);
        
        paths_data.push({
          path: circlePath,
          fillColor: one_data.fillColor || fillColor,
        });
  
        if (index === mainIndex) {
          texts_list = one_data.texts || [];
        }
  
        startAngle = endAngle;
      });
    }

    let modifiedDotsContainerStyle = styles.dotsContainer;
    if (dotsPositionBottom) {
      modifiedDotsContainerStyle = [styles.dotsContainer, { bottom: dotsPositionBottom }];
    }

    const dotsSpanElements = [];

    if (data) {
      for (let i = 0; i < (totalDots || data.length); i++) {
        let dotStyle = {};
  
        if (i === index) {
          dotStyle = [styles.dot, {backgroundColor: fillColor, borderColor: fillColor}];
        } else {
          dotStyle = [styles.dot, {backgroundColor: backgroundColor, borderColor: backgroundColor}];
        }
        dotsSpanElements.push(<View key={i} style={dotStyle}></View>);
      }
    }

    return (
      <View
        style={styles.container}
      >
        <Surface
          width={size}
          height={size}
        >
          <Group rotation={rotation} originX={halfSize} originY={halfSize}>
            { backgroundColor !== 'transparent' && (
              <Shape
                d={this.circlePath(halfSize, halfSize, radius, 0, 360)}
                stroke={backgroundColor}
                strokeWidth={thickness}
                strokeCap={'butt'}
              />
            )}
            {
              paths_data.map((path_data, path_index) => (
                <Shape
                  key={path_index}
                  d={path_data.path}
                  stroke={path_data.fillColor}
                  strokeWidth={thickness}
                  strokeCap={'butt'}
                />
              ))
            }
          </Group>
        </Surface>
        <View style={styles.innerContainer}>
          {centerTextEvaluateFunction(staticCenterText !== undefined ? staticCenterText : fillValue, texts_list, fillColor, childrenStyle || {}, valuePrefix)}
        </View>
        {
          showSliderDots
          ?
            <View style={modifiedDotsContainerStyle}>
              {dotsSpanElements}
            </View>
          :
            null
        }
      </View>
    );
  }
}