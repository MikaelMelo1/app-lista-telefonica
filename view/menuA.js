import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
  menu: {
    margin: 20
  },
  Button: {

    margin: 10,
    width: 160,
  }
});

export default function menuA(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'white' }}>Menu</Text>
      <View>
        <View style={styles.Button}>
          <Button style={styles.Button}
            title="Farmácias"
            onPress={() => props.navigation.navigate("Farmacia")}
          />
        </View>
        <View style={styles.Button}>
          <Button
            title="SuperMercados"
            onPress={() => props.navigation.navigate("Supermercados")}
          />
        </View>
        <View style={styles.Button}>
          <Button style={styles.Button}
            title="Ferragens"
            onPress={() => props.navigation.navigate("Ferragens")}
          />
        </View>
        <View style={styles.Button}>
          <Button style={styles.Button}
            title="Diversos"
            onPress={() => props.navigation.navigate("Diversos")}
          />
        </View>
      </View>
    </View>
  )
}
