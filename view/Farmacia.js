import React from "react";
import { Text, View, Button } from "react-native";

export default function Farmacia(props) {
  return (
    <View>
      <Text> Farmacia</Text>
      <Button
        title="ir para login"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
}
