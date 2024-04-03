import React,{FC} from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
const {black}=colors

const StyledView=styled.Text`
font-size:13px;
color:${black};
text-align:left;
`
import { TextProps } from "./types";

const SmallText:FC<TextProps>=(props)=>{
return <StyledView style={props.style}>{props.children}</StyledView>
}
export default SmallText;