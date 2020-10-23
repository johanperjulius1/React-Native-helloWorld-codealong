import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Auth from "../modules/authentication"

const Login = () => {
  const auth = new Auth({host: 'http://localhost:3000'})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({})
  const logInHandler = async () => {
    try {
      let response = await auth.signIn(email, password)
      setMessage(response.data.uid)
    } catch (error) {

    }
  }
  return (
    <View style={styles.container}>
      <Text>please login</Text>
      <TextInput editable placeholder={'email'} onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput editable placeholder={'password'} onChangeText={(text) => setPassword(text)}></TextInput>
      <Button title='Log in' onPress= {() => logInHandler()} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
