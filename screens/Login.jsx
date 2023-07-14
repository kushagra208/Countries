import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action.js';
import { clearError } from "../redux/authReducer.js"

const Login = ({ navigation }) => {
    const { error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        dispatch(login(email , password));
    }

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearError());
        }
    }, [dispatch , alert , error]);

  return (
    <View style = {{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Text style = {{ fontSize: 24 , margin: 20 }}> WELCOME </Text>
        <View style = {{ width: "70%" }}>
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
            disabled = {!email || !password}
            style = {styles.btn}
            onPress = {loginHandler}
            >
                <Text style = {{ color: "#fff" }}>Login</Text>
            </Button>
            <Text
            style = {{
                marginTop: 20,
                fontSize: 16,
            }}>
                Or
            </Text>
            <TouchableOpacity onPress = {() => navigation.navigate("register")}>
                <Text
                style = {{
                    color: "#900",
                    height: 30,
                    margin: 20,
                    fontSize: 16
                }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate("forgetPassword")}>
                <Text
                style = {{
                    color: "rgb(50 , 50 , 50)",
                    fontSize: 18
                }}>
                    Forgot Password ?
                </Text>
            </TouchableOpacity>
    </View>
  )
}

export default Login

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