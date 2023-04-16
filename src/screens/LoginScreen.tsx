import { ReactElement } from 'react'
import { Button, TextInput, Text, IconButton, Checkbox, useTheme } from 'react-native-paper'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

const LoginScreen = (): ReactElement => {
  const theme = useTheme()

  return (
    <SafeAreaView style={{ ...styles.safeArea, backgroundColor: theme.colors.background }}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text variant='headlineLarge'>Inicia Sesion</Text>
          <TextInput label='Email' />
          <TextInput label='Password' />
          <View style={styles.optionsContainer}>
            <View style={styles.rememberMe}>
              <Checkbox
                status='checked'
                onPress={() => { }}
              />
              <Text variant='bodyMedium'>Recordarme</Text>
            </View>
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center'
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
