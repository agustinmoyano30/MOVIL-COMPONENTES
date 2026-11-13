import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        placeholder="Ingrese su Email"
        placeholderTextColor="#808080"
        autoCapitalize="words"
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput inputMode="email"
      />
      <TextInput
      placeholder="Ingrese su Contraseña"
      secureTextEntry={true}
      />
      <TextInput
      placeholder="Escriba una Descripción"
      multiline={true}
      numerOfLines={4}
      textAlignVertical="top"
      maxLength={100}
      value="Dato de Ejemplo"
      editable={false}
      autoCorrect={false}
      autoComplete="email"
      style={styles.descripcion}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input: {
    width: '100%',
    height:52,
    borderWidth: 1,
    borderColor: '#CCCCCCCC',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroungColor: '#FFFFFFFF'
    }
});
