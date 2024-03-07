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
  const pokemonNameUpperCase =
    pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1);

  // @ts-ignore
  return (
    <View style={styles.details_container}>
      <Image
        source={{
          uri: pokemonDetails.sprites.other['official-artwork'].front_default,
        }}
        style={styles.image}
      />
      <View style={styles.stat_container}>
        <Text style={styles.name}>{pokemonNameUpperCase}</Text>
        <View style={styles.hr}></View>
        <View>
          {pokemonDetails.types.map(
            (
              type: {type: {name: string}},
              index:
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.Key
                | null
                | undefined,
            ) => (
              <Text key={index}>
                Type {index}:{' '}
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </Text>
            ),
          )}
        </View>
        <View style={styles.hr}></View>
        <View>
          {pokemonDetails.abilities.map(
            (
              ability: {ability: {name: string}},
              index:
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.Key
                | null
                | undefined,
            ) => (
              <View key={index}>
                <Text>
                  Ability {index}:{' '}
                  {ability.ability.name.charAt(0).toUpperCase() +
                    ability.ability.name.slice(1)}
                </Text>
              </View>
            ),
          )}
        </View>
        <View style={styles.hr}></View>
        <Text>Height: {pokemonDetails.height} Decimeters</Text>
        <Text>Weight: {pokemonDetails.weight} Hectograms</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details_container: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 200,
  },
  stat_container: {
    width: '90%',
    borderStyle: 'solid',
    borderColor: '#dedede',
    borderWidth: 1,
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  hr: {
    borderWidth: 0.5,
    borderColor: '#dedede',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Details;
