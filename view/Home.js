import React from "react";
import { Text, View, Button } from "react-native";

export default function Home(props) {
  return (
    <View>
      <Text> Esse é o componente Home</Text>
      <Button
        title="ir para login"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
}
