import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicial, Farmacia, menuA, Supermercados, Diversos, Ferragens } from "./view/";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{
            title: "Bem vindo",
            headerTintColor: "black",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="menuA" component={menuA} />
        <Stack.Screen name="Diversos" component={Diversos} />
        <Stack.Screen name="Farmacia" component={Farmacia} />
        <Stack.Screen name="Ferragens" component={Ferragens} />
        <Stack.Screen name="Supermercados" component={Supermercados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/* import React from "react";
import { FlatList, Image, StyleSheet, Text, View, Button } from "react-native";

const data = [
  {
    id: "1",
    name: "Mercado Tschiller",
    endereco: "Rua Juvencio Cardoso",
    numero: "(51) 3723-1313",
    url: "https://ocorreio.com.br/wp-content/uploads/2019/12/Novo-768x330.jpg",
  },

  {
    id: "2",
    name: "Mercado Tschiller",
    endereco: "Rua Juvencio Cardoso",
    numero: "(51) 3723-1313",
    url: "https://ocorreio.com.br/wp-content/uploads/2019/12/Novo-768x330.jpg",
  },
  {
    id: "3",
    name: "Mercado Tschiller",
    endereco: "Rua Juvencio Cardoso",
    numero: "(51) 3723-1313",
    url: "https://ocorreio.com.br/wp-content/uploads/2019/12/Novo-768x330.jpg",
  },

  {
    id: "4",
    name: "Mercado Tschiller",
    endereco: "Rua Juvencio Cardoso",
    numero: "(51) 3723-1313",
    url: "https://ocorreio.com.br/wp-content/uploads/2019/12/Novo-768x330.jpg",
  },
];

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

function App() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <>
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.endereco}</Text>
            <Text style={styles.text}>{item.numero}</Text>
          </View>
        </>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default App; */
