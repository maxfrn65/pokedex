import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import axios from 'axios';

// @ts-ignore
const Details = ({route}) => {
  const {pokemonName} = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        );
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    getPokemonDetails();
  }, [pokemonName]);

  if (!pokemonDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  // @ts-ignore
  const pokemonNameUpperCase =
    pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1);

  return (
    <View>
      <Image
        source={{
          uri: pokemonDetails.sprites.other['official-artwork'].front_default,
        }}
        style={styles.image}
      />
      <Text>{pokemonNameUpperCase}</Text>
      <View>
        <View>
          <View>
            <Text>{pokemonDetails.types.type.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});

export default Details;
