import React from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import TextInput from './text_input';
import Icon from './icon';
import Loader from './loader';

class ChatInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    }

    this.setInputText = this.setInputText.bind(this);
  }

  componentDidMount() {
    this.setInputText(this.props.inputText);
  }

  componentWillReceiveProps(nextProps) {
    this.setInputText(nextProps.inputText);
  }

  setInputText(text) {
    if (text !== undefined) {
      this.setState({ inputText: text });
    }
  }
  
  render() {
    const {
      sendIcon,
      onChange,
      showLoader,
    } = this.props;

    return (
      <View
        style={[styles.inputContainer, this.props.style]}
        elevation={2}
      >
        <View style={styles.innerContainer}>
          <View style={styles.flexView}>
            <TextInput
              onChangeText={(inputText) => {
                this.setInputText(inputText);
                if (onChange) {
                  onChange(inputText);
                }
              }}
              placeholder='Enter Your Message'
              value={this.state.inputText}
              {...this.props}
            />
          </View>
          {
            typeof sendIcon === 'object'
            ?
              <TouchableOpacity
                style={styles.iconContainerStyle}
                onPress={this.props.onSendIconPress}
              >
                <Icon
                  color={sendIcon.color}
                  name={sendIcon.name}
                  type={sendIcon.type}
                  size={sendIcon.size}
                />
              </TouchableOpacity>
            :
              null
          }
          {
            showLoader
            ?
              <View
                style={styles.iconContainerStyle}
              >
                <Loader size={this.props.loaderSize} color={this.props.loaderColor} />
              </View>
            :
              null
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderRadius: 32,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  flexView: {
    flex: 1,
  },
  iconContainerStyle: {
    minWidth: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default ChatInput;