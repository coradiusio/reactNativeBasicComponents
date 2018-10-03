import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';

import ProgressiveInput from 'react-native-progressive-input';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id,
});

export default class SearchableSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: ds.cloneWithRows([]),
      value: '',
    };
    this.searchData = this.searchData.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onInputCleared = this.onInputCleared.bind(this);
  }

  searchData(value) {
    if (value.length >= this.props.minCharToSearch) {
      this.setState({
        isLoading: true,
        value: value
      });

      const refinedData = this.props.dataSource.filter(
        item => item.description.toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
      );

      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(refinedData),
      });
    }
  }

  renderRow(prediction) {
    return (
      <TouchableOpacity
        onPress={() => this.onListItemClicked(prediction)}
        style={styles.listItem}
      >
        <Text>{prediction.description}</Text>
      </TouchableOpacity>
    );
  }

  renderSeparator() {
    return <View style={styles.listItemSeparator} />;
  }

  onInputCleared() {
    this.setState({
      value: '',
      isLoading: false,
      dataSource: ds.cloneWithRows([]),
    });
  }

  onListItemClicked(prediction) {
    // this.setState({
    //   value: prediction.description,
    //   dataSource: ds.cloneWithRows([]),
    //   isLoading: true,
    // });
    // const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
    //   prediction.place_id
    // }&key=${GOOGLE_API_KEY}`;
    // const response = await fetch(url);
    // const jsonResponse = await response.json();
    // const { lat, lng } = jsonResponse.result.geometry.location;
    // this.mapView.animateToRegion({
    //   longitude: lng,
    //   latitude: lat,
    //   latitudeDelta,
    //   longitudeDelta,
    // });
    // this.setState({ isLoading: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressiveInput
          value={this.state.value}
          style={styles.progressiveInput}
          isLoading={this.state.isLoading}
          onChangeText={this.searchData}
          onInputCleared={this.onInputCleared}
        />
        <View style={styles.listViewContainer}>
          <ListView
            enableEmptySections
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSeparator={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  progressiveInput: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  listViewContainer: {
    flex: 0,
  },
  listView: {
    backgroundColor: 'white',
    margin: 10,
  },
  listItem: {
    padding: 10,
  },
  listItemSeparator: {
    borderWidth: 0.5,
  },
});