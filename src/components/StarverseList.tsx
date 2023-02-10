import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { CharacterWithImage } from './../utils/types';
import CharacterCard from './CharacterCard';

interface props {
    characters : CharacterWithImage[];
}
export default function StarverseList({characters}: props) {
    console.log(characters.length);
    
  return (
    <FlatList 
        data={characters}
        keyExtractor={(character) => character.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CharacterCard character={item}/>}
        contentContainerStyle={styles.flatListContainer}
    />
  )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
        // paddingTop:35
    },
})