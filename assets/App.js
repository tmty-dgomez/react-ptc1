import React from "react";
import { Text , View, StyleSheet , Image,Button , Alert,TouchableOpacity} from "react-native";
import gato from "./assets/gato.jpg";
const App =() =>{
  return   (
  <View style={style.container}>
    <Text style ={style.title}>Puro React Native </Text>
    <Image
      source={gato}
      style ={style.img}
    />
    <TouchableOpacity
      onPress={() => Alert.alert("Miau")}
      style ={style.Button}
    >
      <Text style ={style.title}>Miau</Text>
    </TouchableOpacity>
  </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' , 
    backgroundColor: '#A3E4D7'
  },
  title: {
    fontSize :30,
    color: 'white',
  },
  img:{
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  Button:{
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;