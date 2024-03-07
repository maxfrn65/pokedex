import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet} from 'react-native';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search: any) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <>
        <SearchBar
          searchIcon={<Icon name="search" size={20} color={'#d3d3d3'} />}
          clearIcon={<Icon name="close-circle" size={20} color={'white'} />}
          platform={'ios'}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchBar}
          inputStyle={styles.input}
          placeholderTextColor={'#d3d3d3'}
          cancelButtonProps={styles.cancel}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#d50000',
    height: 50,
  },
  searchBar: {
    backgroundColor: '#af0000',
    height: 30,
  },
  input: {
    color: 'white',
  },
  cancel: {
    color: 'white',
  },
});
