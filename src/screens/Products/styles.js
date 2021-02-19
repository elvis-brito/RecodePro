import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#5a3795",
  },
  conteudo1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "#fff",
  },
  image: {
    resizeMode: "contain",
  },
  button: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5a3795",
  },
  buttonComprar: {
    marginBottom: 0,
    width: "100%",
    backgroundColor: '#5a3795'
  }
});

export default styles;