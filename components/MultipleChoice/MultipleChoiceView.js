import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { contextTotal } from './MultipleChoice';

export const MultipleChoiceView = ({question, result, answer}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [value, setValue] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const {total, setTotal} = useContext(contextTotal);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "black" : "transparent";
    return (
      <Item
        item={item}
        backgroundColor={backgroundColor}
        onPress={() => {
          setSelectedId(item.id);
          if (item.id === result) {
            setValue(value + 1);
            setTotal(total + 1);
          } else {
            setValue(0);
            setTotal(total + 0);
          }
          setDisabled(!disabled);
        }}
        disabled={disabled}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={style.container}>
        <Text style={style.question}>{question}</Text>
        <FlatList
          data={answer}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Text style={{
          color: "black",
          marginTop: 10,
          fontWeight: "bold"
        }}>Value: {value} </Text>
      </View>
    </View>
  );
};

const Item = ({item, backgroundColor, onPress, disabled}) => (
  <TouchableOpacity
    style={style.containerItem}
    onPress={onPress}
    disabled={disabled}>
    <View style={style.containerRadioButton}>
      <TouchableOpacity
        style={[{backgroundColor: backgroundColor}, style.radioButton]}
        onPress={onPress}
        disabled={disabled}
      />
    </View>
    <View style={[{flex: 1}, style.containerRadioButton]}>
      <Text style={style.answered}>{item.answered}</Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderWidth: 2,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  question: {
    color: 'black',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'justify',
  },
  containerItem: {
    marginTop: 5,
    flexDirection: 'row',
  },
  containerRadioButton: {
    justifyContent: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 2,
    marginEnd: 10,
  },
  answered: {
    fontSize: 14,
    color: 'black',
    textAlign: 'justify',
    color: "black"
  },
});