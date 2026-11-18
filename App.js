import { Alert, Pressable, StatusBar, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />

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

      {/* 1. Botón con hitSlop (prueba presionar alrededor del botón) */}
      <Pressable
        style={styles.boton}
        hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }} // o hitSlop={50}
        onPress={() => Alert.alert('Información', '¡Botón presionado con hitSlop!')}
      >
        <Text style={styles.textoBoton}>Presionar (Activo)</Text>
      </Pressable>

      {/* 2. Botón con disabled (no ejecuta la alerta) */}
      <Pressable
        disabled={true}
        style={styles.button_desabled}
        onPress={() => Alert.alert('Alerta', 'No debería ejecutarse')}
      >
        <Text style={styles.textoBotonDeshabilitado}>Acción deshabilitada</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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

  // Estilos del botón activo
  boton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // Estilos del botón deshabilitado (de tus capturas)
  button_desabled: {
    backgroundColor: '#CCCCCC',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotonDeshabilitado: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '600',
  },
});