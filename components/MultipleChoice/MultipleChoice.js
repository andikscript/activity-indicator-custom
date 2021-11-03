import React, {createContext, useEffect, useLayoutEffect, useState} from 'react';
import {Dimensions, FlatList, LogBox, ScrollView, StyleSheet, Text, TouchableOpacity, View, VirtualizedList} from 'react-native';
import { MultipleChoiceView } from './MultipleChoiceView';
import { question } from './Question';

export const contextTotal = createContext({
  total: null,
  setTotal: () => {},
});

const shuffle = (array)  => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
    return array;
  }
}

export const MultipleChoice = () => {
  const [total, setTotal] = useState(null);
  const value = {total, setTotal};

  useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      LogBox.ignoreAllLogs();
  })
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={style.header}>
        <Text style={style.textHeader}>Question Choice</Text>
        <Text style={style.total}>Total : {total}</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <contextTotal.Provider value={value}>
          {
            question.map(item => (
            <MultipleChoiceView
              question={item.question}
              result={item.result}
              answer={item.answer}
            />
          ))}
        </contextTotal.Provider>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  total: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});