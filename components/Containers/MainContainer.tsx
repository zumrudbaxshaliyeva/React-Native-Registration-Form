import React,{FC} from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
const {primary}=colors

const StyledView=styled.View`
flex:1;
padding:25px;
padding-top:40px;
background-color:${primary};
justify-content:center;
align-items:center;
`

import { ContainerProps } from "./types";

const MainContainer:FC<ContainerProps>=(props)=>{
return <StyledView style={props.style}>{props.children}</StyledView>
}
export default MainContainer;