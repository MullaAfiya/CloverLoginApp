import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ToastAndroid ,Image} from 'react-native';

const Login = () => {

const [text1, setText1] = useState('');
const [text2, setText2] = useState('');
const [error1, setError1] = useState<string>(''); // Error message for text1
const [error2, setError2] = useState<string>(''); // Error message for text2

const handleText1Input = (inputText: string) => {
  setText1(inputText);
  setError1('');
};

const handleText2Input = (inputText: string) => {
  setText2(inputText);
  setError2('');
};

const handleSubmit = () => {
  let isValid = true;

  if (text1.trim() === '') {
    setError1('Please enter text in Email ID:');
    isValid = false;
  }

  if (text2.trim() === '') {
    setError2('Please enter text in Password:');
    isValid = false;
  }

  if (isValid) {
    // Do something with the validated input
    Alert.alert('Welcome User:', text1);
    //Alert.alert('You entered Password:', text2);
  }
};


 

  return (
    <View style={styles.container}>
          <View>
      <Image
        source={require('./Src/clover.jpg')} // Replace with the path to your image
        style={{ width: 200, height: 200 }} // Define the dimensions of the image
      />
    </View>

      <View>
        <Text>Enter Email ID :</Text>
        <TextInput
        style={styles.input}
        onChangeText={handleText1Input}
          value={text1}
        />
        {error1 !== '' && <Text style={{ color: 'red' }}>{error1}</Text>}
      </View>
      <View>
        <Text>Enter Password :</Text>
        <TextInput
        style={styles.input}
        onChangeText={handleText2Input}
        secureTextEntry={true} 
          value={text2}
        />
        {error2 !== '' && <Text style={{ color: 'red' }}>{error2}</Text>}
      </View>
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 16,
  },
});

export default Login;
