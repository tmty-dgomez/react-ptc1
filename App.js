/*
Comando de instalacion
npm install react-native-screenshot-prevent
npm install expo-screen-capture
expo install expo-permissions
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { usePreventScreenCapture ,addScreenshotListener} from 'expo-screen-capture'; 
import gato from "./assets/gato.jpg";                                              
import * as Permissions from 'expo-permissions';                                    
import { useEffect } from 'react';
const App = () => {
  usePreventScreenCapture();
  async function getCamareraPermissions(){
    const { status } = await Permisions.askAsync(
      Permisions.CAMERA
    )
    if(status == 'granted'){
      addScreenshotListener(() => {
        alert("you took a screenshot")
      })
    }
  }

  useEffect(()=>{
    getCamareraPermissions()
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puro React Native</Text>
      <Image
        source={gato}
        style={styles.img}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => Alert.alert("Miau")}
          title="Miau"
          color="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A3E4D7',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  }
});

export default App;
