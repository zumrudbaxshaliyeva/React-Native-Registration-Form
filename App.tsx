import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './components/Containers/MainContainer';
import BigText from './components/Texts/BigText';
import SmallText from './components/Texts/SmallText';
import RegularText from './components/Texts/RegularText';
import StyledTextInput from './components/inputs/StyledTextInput';
import RegularButton from './components/Buttons/RegularButton';
import { useState } from 'react';
export default function App() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
const [password,setPassword]=useState('')
  return (
    <MainContainer>
      <BigText>Registration Form</BigText>
      <RegularText>Registration Form</RegularText>
      <SmallText style={{marginBottom:20}}>Registration Form</SmallText>
      <StyledTextInput 
      label="Email Address"
        icon="email-variant"
        value={email} 
        onChangeText={setEmail}
        placeholder='zumrudbaxsaliyeva@gmail.com'
        keyboardType="email-address"
        style={{marginBottom:20}}
        />
        <StyledTextInput 
        label="fullName"
        icon="account"
        value={fullName} 
        onChangeText={setFullName}
        placeholder='Zumrud Bakhshaliyeva'
        // keyboardType="fullName"
        style={{marginBottom:20}}
        />
        <StyledTextInput 
        label="Password"
        icon="lock-open"
        value={password} 
        onChangeText={setPassword}
        placeholder='* * * * * * *'
        isPassword={true}
        style={{marginBottom:20}}
        />
      <StatusBar style="auto" />
      <RegularButton onPress={()=>{
        alert("clicked!")
      }}>Click !!!</RegularButton>
    </MainContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
