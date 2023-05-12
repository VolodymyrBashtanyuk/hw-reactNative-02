
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/images/image-app.jpeg')}>
        <View style={styles.form}>
          <View>
            <Text style={styles.imputTitle}>Email adress</Text>
            <TextInput style={styles.input} textAlign={'center'} />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.imputTitle}>Password</Text>
            <TextInput style={styles.input} textAlign={'center'} secureTextEntry={true} />
          </View>
          <Button title='SING IN'/>
        </View>
       
      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    resizeMode: 'cover',
  },
  form: {
    marginHorizontal: 20,

  },
  imputTitle: {
    color: '#f0f8ff', 
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    height: 40,
    borderRadius: 10,
    color: '#f0f8ff',
  }
});
