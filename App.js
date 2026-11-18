import { Alert, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Datos personales</Text>

      <Text style={styles.etiqueta}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        autoCapitalize="words"
      />

      <Text style={styles.etiqueta}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="usuario@correo.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.etiqueta}>Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su teléfono"
        keyboardType="phone-pad"
      />

      <Text style={styles.etiqueta}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        secureTextEntry={true}
      />

      <Pressable
        style={styles.boton}
        hitSlop={50}
        onPress={() => Alert.alert('Información', 'Botón presionado')}
      >
        <Text style={styles.textoBoton}>Presionar</Text>
      </Pressable>

      <Pressable
        disabled={false}
        style={styles.button_desabled}
      >
        <Text style={styles.textoBotonDeshabilitado}>Acción deshabilitada</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#F8F6F0',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#291334',
    marginBottom: 24,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#291334',
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    marginBottom: 18,
    fontSize: 16,
  },

  // Estilos del botón activo (de la clase)
  boton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // Estilos del botón deshabilitado (de la clase)
  button_desabled: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotonDeshabilitado: {
    color: '#333333',
    fontSize: 14,
  },
});