
import { AppRegistry, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}:DiceProps):JSX.Element => {
return(
  <View>
    <Image style={styles.diceImage} source ={imageUrl}/>
  </View>
)
}

function App(): JSX.Element {
  const [diceImages,setdiceImages] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceonTap = () => {
    let random = Math.floor(Math.random()*6)+1;

    switch (random) {
      case 1:
        setdiceImages(DiceOne)
        break;
      case 2:
        setdiceImages(DiceTwo)
        break;
      case 3:
          setdiceImages(DiceThree)
          break;    
      case 4:
        setdiceImages(DiceFour)
        break;
      case 5:
          setdiceImages(DiceFive)
          break; 
      case 6:
            setdiceImages(DiceSix)
            break;       
      default:
        setdiceImages(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
    <View style = {styles.container}>
      <Dice imageUrl={diceImages}/>
      <Pressable 
      onPress={rollDiceonTap}>
        <Text style={styles.rollDiceBtnText}>
        Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})

AppRegistry.registerComponent('Appname', () => App);
