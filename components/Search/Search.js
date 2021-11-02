import React, {useLayoutEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Search = ({data}) => {
  const [condition, setCondition] = useState('');
  const [search, setSearch] = useState('');

  let [dataSearch, setDataSearch] = useState(null);
  const [dataTampil, setDataTampil] = useState(null);

  useLayoutEffect(() => {
    setDataSearch(data);
    setDataTampil(data);
  }, [condition]);

  const searching = () => {
    dataSearch = dataSearch.filter(i =>
      i.buah.toLowerCase().includes(search.toLowerCase()),
    );
    setDataTampil(dataSearch);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: 'white',
          marginHorizontal: 20,
          marginTop: 50,
          borderRadius: 20,
          paddingHorizontal: 10,
          marginBottom: 20,
        }}>
        <TextInput
          placeholder="search"
          value={search}
          onChangeText={search => {
            setSearch(search);
            searching();
          }}
          style={{
            flex: 1,
            fontSize: 16,
            color: 'white',
            height: 50,
          }}
          placeholderTextColor={'white'}
        />
        <TouchableOpacity onPress={() => {
            setDataTampil(data);
            setSearch('');
        }}>
          <Icon name="sync" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={dataTampil}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'white',
              marginVertical: 5,
              marginHorizontal: 20,
              padding: 20,
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 16,
              }}>
              {item.buah}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};