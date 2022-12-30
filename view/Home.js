import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    flexDirection: "column",
    backgroundColor: "#ADD8E6",
    margin: 2,
    borderRadius: 50,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lugar: {
    backgroundColor: "green",
    alignItems: "center",
    textAlign: "center",
  },
});

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text> Esse é o componente Home</Text>
      <Button
        title="ir para login"
        onPress={() => props.navigation.navigate("Login")}
      />
      <Button
        title="ir para login"
        onPress={() => props.navigation.navigate("Login")}
      />
      <Button
        title="ir para login"
        onPress={() => props.navigation.navigate("Login")}
      />
      <Button
        title="ir para login"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
}
