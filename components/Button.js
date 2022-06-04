import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ imgURL, handlePress, ...Props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...Props,
       }}
       onPress={handlePress}
    >
        <Image 
           source={imgURL}
           resizeMode="contain"
           style={{ width: 24, heigh: 24 }} 
        />
    </TouchableOpacity>
  ) 
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...Props}) => {
    return (
     <TouchableOpacity
       style={{
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.extraLarge,
          minWidth: minWidth,
          padding: SIZES.small,
          ...Props,
         }}
         onPress={handlePress}
      >
        <Text style={{
           fontFamily: FONTS.semiBold,
           fontSize: fontSize,
           color: COLORS.white,
           textAlign: 'center' 
        }}>
           Place a Bid 
        </Text>
      </TouchableOpacity>
    )
  }