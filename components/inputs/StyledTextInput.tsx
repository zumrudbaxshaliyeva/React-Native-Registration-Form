import React, { useState, FC } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SmallText from "../Texts/SmallText";
const { primary, secondary, accent, black, gray } = colors
const InputWrapper = styled.View`
width:100%
`
const LeftIcon = styled.View`
position:absolute;
top:35px;
left:15px;
z-index:1;
border-right-width:2px;
border-color:${secondary};
padding-right:10px;
`
const RightIcon = styled.TouchableOpacity`
position:absolute;
top:35px;
right:15px;
z-index:1;
`
const InputField = styled.TextInput`
background-color:${primary};
height:60px;
border-width:2px;
border-radius:10px;
border-color:${secondary};
margin-vertical:3px;
margin-bottom:10px;
padding:15px;
padding-left:65px;
padding-right:55px;
font-size:16px;
color:${black};

`


import { InputProps } from './types'

const StyledTextInput: FC<InputProps> = (
    { icon,
        label,
        isPassword,
        ...props }) => {
    const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
    const [hidePassword, setHidePassword] = useState(true)
    const customOnFocus = () => {
        props?.onFocus;
        setInputBackgroundColor(secondary)
    }
    const customOnBlur = () => {
        props?.onBlur;
        setInputBackgroundColor(primary)
    }
    return <InputWrapper>
        <LeftIcon>
            <MaterialCommunityIcons
                name={icon}
                size={30}
                color={secondary} />
        </LeftIcon>
        <SmallText>{label}</SmallText>
        <InputField
            {...props}
            placeholderTextColor={gray}
            style={[{ backgroundColor: inputBackgroundColor }, props.style]}
            onFocus={customOnFocus}
            onBlur={customOnBlur}
            secureTextEntry={isPassword && hidePassword} />
           
        {isPassword && <RightIcon onPress={()=>{
            setHidePassword(!hidePassword)
        }}>
        <MaterialCommunityIcons name={hidePassword ? "eye-off":"eye"} size={30} color={black} />
        </RightIcon>}
    </InputWrapper>
}
export default StyledTextInput;