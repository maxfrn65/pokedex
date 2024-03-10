import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, FlatList, Image, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';

// @ts-ignore
const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    fetchSearchResults('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  const fetchSearchResults = async (url: string) => {
    try {
      const response = await axios.get(url);
      const {results, next} = response.data;
      const pokemonData = await Promise.all(
        results.map(async (pokemon: {url: string; name: any}) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        }),
      );

      const uniquePokemonData = pokemonData.filter(newPokemon => {
        return !searchResults.some(
          existingPokemon => existingPokemon.name === newPokemon.name,
        );
      });

      // @ts-ignore
      setSearchResults(prevList => [...prevList, ...uniquePokemonData]);
      setNextPage(next);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadMoreData = () => {
    if (nextPage) {
      fetchSearchResults(nextPage);
    }
  };

  const filteredResults = () => {
    return searchResults.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  // @ts-ignore
  const renderPokemonItem = ({item}) => {
    return (
      <Pressable
        style={styles.pokemonContainer}
        onPress={() =>
          navigation.navigate('Search Details', {
            pokemonName: item.name,
          })
        }>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
      </Pressable>
    );
  };

  return (
    <>
      <View>
        <SearchBar
          searchIcon={<Icon name="search" size={20} color={'#d3d3d3'} />}
          clearIcon={<Icon name="close-circle" size={20} color={'white'} />}
          platform={'ios'}
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchBar}
          inputStyle={styles.input}
          placeholderTextColor={'#d3d3d3'}
          cancelButtonProps={styles.cancel}
          lightTheme
          round
          showLoading={false}
        />
      </View>
      <View style={styles.search}>
        {search.length > 0 && (
          <FlatList
            data={filteredResults()}
            numColumns={2}
            renderItem={renderPokemonItem}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.5}
          />
        )}
        {search.length === 0 && (
          <View style={styles.noInputView}>
            <Icon name="search" size={40} color={'#dedede'} />
            <Text style={{color: '#dedede', fontSize: 20, fontWeight: 'bold'}}>
              Search for Pokemon...
            </Text>
          </View>
        )}
        {search.length !== 0 && filteredResults().length === 0 && (
          <View style={styles.noInputView}>
            <Icon name="close-circle" size={40} color={'#dedede'} />
            <Text style={{color: '#dedede', fontSize: 20, fontWeight: 'bold'}}>
              No Results for {search}
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

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
  search: {
    flex: 2,
    marginHorizontal: 'auto',
    width: '100%',
    backgroundColor: 'white',
  },
  pokemonContainer: {
    flex: 1,
    maxWidth: '50%',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dedede',
  },
  image: {
    height: 100,
    width: 100,
  },
  noInputView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});

export default Search;
