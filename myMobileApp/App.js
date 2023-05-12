import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/images/image-app.jpeg')}>
          <View style={styles.textBox}>
            <Text style={styles.text}>My first App!!!Started!!!!Learning React-Native?</Text>
            <Text style={styles.text}>Program started :)!!!</Text>
            <Text style={styles.text}>Congratulation!!!!!!</Text>
          </View>

        <StatusBar style="auto" />
      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    color: '#fee1d3',
    fontSize: 30,
  },
  textBox: {
    borderWidth: 2,
    borderColor: '#fd3412',
    padding: 20,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  }
});
