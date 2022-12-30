import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: 'center',

    height: 200,
    width: 400,
  },
  image: {
    height: 50,
    width: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    color: "black",
    fontWeight: "bold",
  },
});

export default function Menu(props) {
  return (
    <ScrollView>
    <TouchableOpacity onPress={() => props.navigation.navigate("Supermercados")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("./mercado.png")} style={styles.image} />
          <Text style={styles.text}>Mercado</Text>
        </View>

      </View>
    </TouchableOpacity>


    </ScrollView >
  );
}