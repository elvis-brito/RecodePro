import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';



import styles from './styles';

function Login({navigation}) {

    function autenticacao() {
            navigation.navigate("Home");

    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.conteiner}>
            
            <View style={styles.conteudo}>
                  <View>
                      <Text style={styles.titulo}>Login</Text>
                  </View>

                  <View style={styles.inputs}>

                      <TextInput 
                          placeholder="Digite o email..." 
                          style={styles.input}
                          value={usuario}
                          onChangeText={(text) => setUsuario(text)}
                      />

                      <TextInput 
                          placeholder="Digite o senha..." 
                          style={styles.input} 
                          secureTextEntry={true}
                          value={senha}
                          onChangeText={(text) => setSenha(text)}
                      />

                      <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                          <Text style={styles.texto}>Entrar</Text>
                      </TouchableOpacity>

                  </View>
                  
              </View>

        </View>
    )
}


export default Login;