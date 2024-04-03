import { ReactNode ,ComponentProps} from "react";
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { GestureResponderEvent } from "react-native";

export interface ButtonProps{
children:ReactNode;
style?:StyleProp<ViewStyle>
textStyle?:StyleProp<TextStyle>
onPress:((event:GestureResponderEvent)=>void) | undefined;
}
