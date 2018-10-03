import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class QRCodeScan extends React.PureComponent {

  onSuccess(e) {
    console.log(e.data);
    if (this.props.onScanSuccess) {
      this.props.onScanSuccess(e.data);
    }
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        {...this.props}
      />
    );
  }
}

export default QRCodeScan;