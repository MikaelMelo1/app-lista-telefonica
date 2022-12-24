import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Login(props) {
  return (
    <View>
      <Text>o componente Login do Sistema</Text>
      <Text styles={styles.button}>o componente Login do Sistema</Text>

      <Button
        title="IR PARA FARMÁCIA"
        onPress={() => props.navigation.navigate("Farmacia")}
        styles={styles.button}
      >
        CLIQUE AQUIS
      </Button>
    </View>
  );
}

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
