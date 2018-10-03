import React from 'react';

import {
  Animated,
  AppState,
  Easing
} from 'react-native';

import CircularProgress from './circular_progress';

const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress);

export default class AnimatedCircularProgress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      appState: AppState.currentState,
      chartFillAnimation: new Animated.Value(0),
      data: [],
    }
  }

  componentDidMount() {
    this.startAnimation();
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  startAnimation = () => {
    if (this.props.data && this.props.data.length > 0) {
      this.props.data.slice(0,1).map(item => {
        const { data } = this.state;
        data[0] = item;
        this.setState({ data: data });
        this.animateFill(item.value, this.props.animationDuration, this.onAnimationComplete);
      });
    } else if (this.props.fillValue) {
      this.animateFill(this.props.fillValue, this.props.animationDuration);
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      // Fix bug on Android where the drawing is not displayed after the app is
      // backgrounded / screen is turned off. Restart the animation when the app
      // comes back to the foreground.
      this.setState({
        chartFillAnimation: new Animated.Value(0),
        data: [],
        index: 0,
      });
      this.startAnimation();
    }
    this.setState({ appState: nextAppState });
  }

  onAnimationComplete = () => {
    const { index } = this.state;
    let newIndex = index + 1;

    if (this.props.data && this.props.data.length > 1) {
      if (newIndex === this.props.data.length - 1) {
        const { data } = this.state;
        data[newIndex] = this.props.data[newIndex];
        this.setState({ data, index: newIndex });
        this.animateFill(this.props.data[newIndex].value, this.props.animationDuration);
      } else {
        const { data } = this.state;
        data[newIndex] = this.props.data[newIndex];
        this.setState({ data, index: newIndex });
        this.animateFill(this.props.data[newIndex].value, this.props.animationDuration, this.onAnimationComplete);
      }
    }
  } 

  animateFill(fillValue, duration, onAnimationComplete) {
    const { tension, friction } = this.props;

    Animated.timing(
      this.state.chartFillAnimation,
      {
        toValue: fillValue,
        easing: Easing.linear,
        duration: duration,
      }
    ).start(onAnimationComplete);
  }

  render() {
    const {
      size,
      thickness,
      rotation,
      backgroundColor,
      fillColor,
      maxValue,
      children,
      childrenStyle,
      showSliderDots,
      dotsPositionBottom,
      staticCenterText,
      valuePrefix,
      showOnlyOneFillColor,
      texts,
    } = this.props;

    return (
      <AnimatedProgress
        size={size}
        thickness={thickness}
        rotation={rotation}
        fillValue={this.state.chartFillAnimation}
        backgroundColor={backgroundColor}
        fillColor={fillColor}
        maxValue={maxValue}
        children={children}
        childrenStyle={childrenStyle}
        data={this.props.data ? this.state.data : undefined}
        mapping_data={this.props.data}
        index={this.state.index}
        showSliderDots={showSliderDots}
        dotsPositionBottom={dotsPositionBottom}
        staticCenterText={staticCenterText}
        valuePrefix={valuePrefix}
        showOnlyOneFillColor={showOnlyOneFillColor}
        texts={texts}
        useNativeDriver
        doAnimation
      />
    );
  }
}

AnimatedCircularProgress.defaultProps = {
  animationDuration: 2000,
};
