import {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, Image, Pressable} from 'react-native';
import axios from 'axios';

// @ts-ignore
const Home = ({navigation}) => {
  const [pokemonList, setPokemonList] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      const pokemons = response.data.results;
      const pokemonData = await Promise.all(
        pokemons.map(async (pokemon: {url: string; name: any}) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        }),
      );
      // @ts-ignore
      setPokemonList(pokemonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // @ts-ignore
  const PokemonContainer = ({item}) => {
    return (
      <Pressable
        style={styles.pokemonContainer}
        onPress={() =>
          navigation.navigate('Détails', {
            pokemonName: item.name,
          })
        }>
        <Image source={{uri: item.image}} style={styles.image}></Image>
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