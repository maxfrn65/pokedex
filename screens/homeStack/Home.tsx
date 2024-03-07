import {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Image, Pressable} from 'react-native';
import axios from 'axios';

// @ts-ignore
const Home = ({navigation}) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState('');

  const fetchData = async url => {
    try {
      const response = await axios.get(url);
      const {results, next} = response.data;
      const pokemonData = await Promise.all(
        results.map(async pokemon => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        }),
      );
      setPokemonList(prevList => [...prevList, ...pokemonData]);
      setNextPage(next);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  const loadMoreData = () => {
    if (nextPage) {
      fetchData(nextPage);
    }
  };

  // @ts-ignore
  const PokemonContainer = ({item}) => {
    return (
      <Pressable
        style={styles.pokemonContainer}
        onPress={() =>
          navigation.navigate('Details', {
            pokemonName: item.name,
          })
        }>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.home}>
      <FlatList
        data={pokemonList}
        numColumns={2}
        renderItem={({item}) => <PokemonContainer item={item} />}
        keyExtractor={item => item.name}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 2,
    marginHorizontal: 'auto',
    width: 385,
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
});

export default Home;
