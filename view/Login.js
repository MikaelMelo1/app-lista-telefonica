import React from "react";
import { Text, View, Button } from "react-native";

export default function Login(props) {
  return (
    <View>
      <Text> Esse é o componente Login do Sistema</Text>
      <Button
        title="ir para login"
        onPress={() => props.navigation.navigate("Farmacia")}
      />
    </View>
  );
}
