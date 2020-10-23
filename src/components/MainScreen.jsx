import React from 'react'
import { useSelector } from "react-redux"
import { StyleSheet, Text, Button, View } from 'react-native'

const MainScreen = (props) => {
  const greeting = useSelector(state => state.mainPageGreeting)
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        title="Press me!"
        onPress={() => props.navigation.navigate("Another Page", {customParameter: "Hello Johan"})}
        />
      
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
