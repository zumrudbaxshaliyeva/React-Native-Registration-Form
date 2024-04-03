import React,{FC} from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
const {primary,secondary,accent}=colors


const ButtonView=styled.TouchableOpacity`
background-color:${accent};
width:100%;
height:60px;
padding:15px;
border-radius:15px;
justify-content:center;
align-items:center; 
`

import { ButtonProps} from "./types";

const RegularButton:FC<ButtonProps>=(props)=>{
return <ButtonView onPress={props.onPress} style={props.style}>
    <RegularText style={[{color:secondary},props.textStyle]}>{props.children}</RegularText>
    </ButtonView>
}
export default RegularButton;