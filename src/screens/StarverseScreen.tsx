import React, {useState, useEffect} from 'react'
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAllCharacters, getCharacterImage } from '../api/starverse';
import StarverseList from '../components/StarverseList';
import { CharacterWithImage } from '../utils/types';

export const StarverseScreen = () => {
  const [characters, setCharacters] = useState<Array<CharacterWithImage>>([])
  console.log(characters);
  
  useEffect(() => {
    ( () => {
      loadCharacters()
      console.log(characters);
      
    })()

  }, [setCharacters]);

  const loadCharacters = async () => {
    try {
      const response =await getAllCharacters();
      const charactersArray: Array<CharacterWithImage> =[]
      let index = 0;
      for await  (const character of response.results) {
        index +=1;
        const characterImage = getCharacterImage(index)
        charactersArray.push({
          ...character,
          image: characterImage,
          id: String(index),
        })
        console.log(charactersArray);
        
      }
      setCharacters([...characters ,...charactersArray])
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
        {/* <Text>Starverse</Text> */}
        <StarverseList characters={characters}/>
    </SafeAreaView>
  )
}
