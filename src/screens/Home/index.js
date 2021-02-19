import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";


function Home({ navigation }) {
  function ver() {
    navigation.navigate("Products");
  }
  function logoff() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.conteudo}>
          <View style={styles.inputs}>
            <Text
              style={{
                color: "#5a3795",
                fontSize: 30,
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              FullStack Eletro!
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                textAlign: "justify",
                marginBottom: 20,
                fontWeight: "300",
              }}
            >
              Sejam bem vindo(a)s a nossa loja!
            </Text>
            <TouchableOpacity style={styles.button} onPress={ver}>
              <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
                Produtos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonLogoff]}
              onPress={logoff}
            >
              <Text style={{ color: "#5a3795", fontSize: 20, fontWeight: "bold" }}>
                Sair
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}
export default Home;