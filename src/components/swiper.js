import React from 'react';

import SwiperComponent from 'react-native-swiper';

export default class Swiper extends React.PureComponent {
  render() {
    return (
      <SwiperComponent
        {...this.props}
      >
        {this.props.children}
      </SwiperComponent>
    );
  }
}