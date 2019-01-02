import React from 'react'

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  colors
} from '../constants'

import EllipticalButton from './elliptical_button'

export default class RadioChoices extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      value: props.initial || '',
      pointerEvents: 'auto'
    }
  }

  componentDidMount() {
    if (this.props.pointerEvents) {
      this.setState({
        pointerEvents: this.props.pointerEvents
      })
    }

    if (this.props.value) {
      this.setState({
        pointerEvents: this.props.value
      })
    }
  }

  handleButton (label, value) {
    this.setState({ value })
    if (typeof this.props.onChange === 'function') {
      this.props.onChange({ label, value })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pointerEvents && nextProps.pointerEvents !== this.state.pointerEvents) {
      this.setState({
        pointerEvents: nextProps.pointerEvents
      })
    }

    if (nextProps.value && nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  render () {
    const {
      choices
    } = this.props

    return (
      <View
        style={[
          styles.buttonsContainer,
          this.props.buttonsContainerStyle
        ]}
        pointerEvents={this.state.pointerEvents}
      >
        {
          choices && choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.handleButton(choice.label, choice.value)}
            >
              <EllipticalButton
                label={choice.label}
                style={[this.props.containerStyle, this.state.value === choice.value ? [styles.fillContainer, this.props.fillContainerStyle] : null]}
                textStyle={[styles.font, this.state.value === choice.value ? styles.lightText : null, this.props.lightTextStyle]}
              />
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 9,
    paddingBottom: 9
  },
  fillContainer: {
    backgroundColor: colors.green
  },
  font: {
    fontSize: 14
  },
  lightText: {
    color: colors.white
  }
})

