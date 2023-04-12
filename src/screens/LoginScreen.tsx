import { ReactElement } from 'react'
import { Button, TextInput, Text, IconButton } from 'react-native-paper'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

const LoginScreen = (): ReactElement => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text variant='headlineLarge'>Inicia Sesion</Text>
          <TextInput
            label='Email'
          />
          <TextInput
            label='Password'
          />
          <View style={{ alignItems: 'flex-end' }}>
            <Button mode='text' onPress={() => {}}>
              Olvide mi contraseña
            </Button>
          </View>
          <Button mode='contained' onPress={() => {}}>
            Iniciar sesion
          </Button>
          <Button mode='contained-tonal' onPress={() => {}}>
            No tienes una cuenta?
          </Button>
        </View>
        <View style={styles.socialButtonsContainer}>
          <Text variant='bodyMedium'>O inicia sesion con</Text>
          <View style={styles.socialButtons}>
            <IconButton icon='facebook' mode='contained' onPress={() => {}} size={30} />
            <IconButton icon='google' mode='contained' onPress={() => {}} size={30} />
            <IconButton icon='twitter' mode='contained' onPress={() => {}} size={30} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: '10%',
    justifyContent: 'space-between'
  },
  formContainer: {
    gap: 20
  },
  socialButtonsContainer: {
    alignItems: 'center'
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 15
  }
})

export default LoginScreen
