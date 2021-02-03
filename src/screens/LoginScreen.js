import React from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const LoginScreen=({navigation}) => {
    return(  
     <View>
         <View style={styles.squareStyle} ></View>
         <Image  style={styles.logoStyle}  
         source={require('../../assets/cookburn.png')}/>
        
        <Text style={styles.cookburnStyle}>CookBurn</Text>
        <Text style={styles.notregistStyle}
            onPress={() => navigation.navigate('Signup')}>
            Not registered? </Text>
       
       <Text style={styles.usernameStyle}> Username</Text>
        
        <TextInput style={styles.usernameboxStyle}
        autoCapitalize ='none'
        placeholder='username'
        placeholderTextColor='#FF5733'
        />
        <Text style={styles.passwordStyle}> Password </Text>
        <TextInput style={styles.passwordboxStyle}
        secureTextEntry={true}
        autoCapitalize ='none'
        placeholder='password'
        placeholderTextColor='#FF5733'
        />

    <TouchableOpacity  onPress={() => navigation.navigate('On1')}
       style ={styles.buttonStyle} >
                <Text style ={styles.textStyle} >Log in</Text>
        </TouchableOpacity>
        
        
        <Text style={styles.forgotpwdStyle}
         onPress={() => navigation.navigate('Blank')}> forgot your password?</Text>
    </View>
   

    );
};

const styles = StyleSheet.create({
    logoStyle:{
        width: 157.4,
        height: 157.4,
        position:'absolute',
        left: 109,
        top: 105,
        zIndex: 5
    },
    squareStyle:{
        width: 375,
        height: 314,
        backgroundColor: '#FF5733',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100 
    },
    cookburnStyle:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position:'absolute',
        left: 84,
        top: 260
    },
    notregistStyle: {
        color: '#FF5733',
        fontSize: 10,
        position:'absolute',
        left: 235,
        top: 339
    },
    usernameboxStyle:{
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        height: 40,
        width: 302,
        position: 'absolute',
        left: 36.5,
        top: 374,
        color: '#FF5733',
        fontSize: 10,
      
    },passwordboxStyle:{
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        height: 40,
        width: 302,
        position: 'absolute',
        left: 36.5,
        top: 449,
        color: '#FF5733',
        fontSize: 10,
       
    },

    usernameStyle:{
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#FF5733',
        position: 'absolute',
        left: 20,
        top: 358
    },

    passwordStyle:{
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#FF5733',
        position: 'absolute',
        left: 20,
        top: 433
    },

    forgotpwdStyle:{
        color: '#FF5733',
        fontSize: 10,
        textAlign: 'center',
        position:'absolute',
        left: 137,
        top: 569
    },
    buttonStyle:{
        width: 295,
        height: 37,
        backgroundColor: '#FF5733',
        position:'absolute',
        left: 40,
        top: 520,
        borderRadius: 24, 
        borderWidth: 1,
        borderColor: '#FF5733',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },

    textStyle:{
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default LoginScreen;

