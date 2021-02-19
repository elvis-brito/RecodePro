import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
        height: Platform.OS === "web" ? "100vh" : "100%",
        backgroundColor: '#fff',
    },
    conteudo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: "#5a3795",
        fontSize: 32
    },
    inputs: {
        width: "100%",
        padding: 8,
        alignItems: 'center',
        
    },
    input: {
        backgroundColor: "white",
        width: "94%",
        padding: 8,
        marginTop: 12,
        height: 50,
        margin: 5,
        borderWidth : 2.0,
        borderColor : "#5a3795"
    },
    btn:{
        height: 50,
        width: 100,
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5a3795",
    },
    texto:{
        fontSize: 18,
        color: "white",
        textAlign: 'center'
    }
})

export default styles;