import React from 'react';
import auth, {firebase} from '@react-native-firebase/auth';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
  
} from 'react-native';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSignUp = () => {
   
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => console.log('signin successfull'))
      .catch(error => console.log(error));

      this.setState({email : '' , password : ''})
  };

  handleLogin = () => {
    console.log('login')
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(() => this.props.navigation.navigate('Home') )
    //   .catch(error => console.log(error));
    //   this.setState({email : '' , password : ''})
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#e93766', fontSize: 40}}>Sign Up</Text>
       
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign Up" color="#e93766" onPress={this.handleSignUp} />
        <View>
          <Text>
            {' '}
            Already have an account?{' '}
            <Text
              onPress={this.handleLogin}
              style={{color: '#e93766', fontSize: 18}}>
              {' '}
              Login{' '}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
  },
});
