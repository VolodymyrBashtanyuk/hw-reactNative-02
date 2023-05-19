import { useState } from 'react';
// import React {useState} from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView} from 'react-native';

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <View style={styles.container}>

      <ImageBackground style={styles.image} source={require('./assets/images/image-app.jpeg')}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <View style={{...styles.form, marginBottom: isShowKeyboard ? 50: 10}}>
          <View>
            <Text style={styles.imputTitle}>Email adress</Text>
            <TextInput style={styles.input} textAlign={'center'} onFocus={()=>setIsShowKeyboard(true)}/>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.imputTitle}>Password</Text>
            <TextInput style={styles.input} textAlign={'center'} secureTextEntry={true} onFocus={()=>setIsShowKeyboard(true)}/>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn} >
              <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
          
       
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
    // marginBottom: 50,

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
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    borderRadius: 10,
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: '#1e90ff',
        
      },
      android: {
        backgroundColor: '#0000ff',

      }
    })

  },
  btnTitle: {
    color: '#f0f8ff',
    fontSize: 18,
  }
});
