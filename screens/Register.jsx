import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { register } from '../redux/action'


const Register = ({ navigation , route }) => {
    
    const dispatch = useDispatch();
    
    const [name , setName ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleImage = () => {
        navigation.navigate("camera", {
            updateProfile: false,
        });
    }
    const registerHandler = () => {
        const myForm = new FormData();

        myForm.append("name", name);
        myForm.append("email", email);
        myForm.append("password", password);

        dispatch(register(myForm));
    }

    useEffect(() => {
      

    
    }, [route])
    

  return (
    <View style = {{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }}>

        <Text style = {{ fontSize: 30 , color: "#900" , letterSpacing: 2 }}>Register</Text>
        <View style = {{ width: "70%" }}>
            <TextInput 
            style = {styles.input}
            placeholder = "Name"
            value = {name}
            onChangeText = {setName}
            />
            <TextInput 
            style = {styles.input}
            placeholder = "Email"
            value = {email}
            onChangeText = {setEmail}
            />
            <TextInput 
            secureTextEntry
            style = {styles.input}
            placeholder = "Password"
            value = {password}
            onChangeText = {setPassword}
            />

        </View>
            <Button
            disabled = {!email || !password || !name}
            style = {styles.btn}
            onPress = {registerHandler}
            >
                <Text style = {{ color: "#fff" }}>Register</Text>
            </Button>
            <View style = {{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,

            }}>
            <Text
            style = {{
            }}>
                Already have an account ?
            </Text>
            <TouchableOpacity onPress = {() => navigation.navigate("login")}>
                <Text
                style = {{
                    color: "#900",
                    marginLeft: 10
                }}>
                    Log In
                </Text>
            </TouchableOpacity>
            </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#b5b5b5",
        paddingLeft: 15,
        borderRadius: 5,
        marginVertical: 15,
        fontSize: 15,
    },
    btn: {
        backgroundColor: "#900",
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        alignSelf: "center",
        marginVertical: 20,
        elevation: 5
    }
})