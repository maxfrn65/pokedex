import React from 'react';
import {Text, View, FlatList} from 'react-native';
import axios from 'axios';

function App() {
  axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/',
  }).then(response => {
    const pokemon = response.data;
    console.log(pokemon);
  });
  return (
    <View>
      <FlatList
        data={pokemon}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

export default App;
