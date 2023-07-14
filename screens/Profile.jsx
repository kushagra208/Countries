import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout, updateProfile } from '../redux/action'
import mime from "mime";
import Loader from '../components/Loader'

const Profile = ({ navigation , route }) => {

  const { user , loading } = useSelector(state => state.auth);
  const [name , setName] = useState(user.name);
  const [avatar , setAvatar] = useState(user.avatar.url);
  
  const dispatch = useDispatch();

  const submitHandler = () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("avatar", {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop()
    });
    dispatch(updateProfile(myForm));
    dispatch(loadUser());
  }
  const handleImage = () => {
    navigation.navigate("camera" , {
      updateProfile: true
    });
  } 
  const logoutHandler = () => {
    dispatch(logout());
  }

  useEffect(() => {
      
    if(route.params) {
        if(route.params.image){
            setAvatar(route.params.image);
        }
    }

}, [route])


  return (
    loading ? <Loader /> : <View
    style = {{
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }}>
      <Avatar.Image
      size = {100}
      source = {{ uri: avatar ? avatar : null}}
      style = {{ backgroundColor: "#900" }} />
      <TouchableOpacity onPress={handleImage}>
        <Text style = {{ color: "#900" , margin: 20 , fontSize: 20}}>Change Photo</Text>
      </TouchableOpacity>
      <View style = {{ width: "70%" }}>
        <TextInput
        style = {styles.input}
        placeholder = {name}
        onChangeText={setName}
        />
        </View>
        <Button
        mode = "elevated"
        style = {styles.btn}
        onPress = {submitHandler}
        >
          <Text style = {{ color: "#fff" , letterSpacing: 3 }}>UPDATE</Text>
        </Button>
        { user.verified ? null : <Button
        mode = "elevated"
        style = {styles.btn}
        onPress = {() => navigation.navigate("verify")}
        >
          <Text style = {{ color: "#fff" , letterSpacing: 3 }}>VERIFY</Text>
        </Button>}
        <Button
        textColor = 'rgb(50, 50 ,50)'
        onPress = {() => navigation.navigate("changePassword")}>
          CHANGE PASSWORD
        </Button>
        <Button
        textColor = 'rgb(50, 50 ,50)'
        onPress = {logoutHandler}>
          LOGOUT
        </Button>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 0,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#900",
    width: "70%",
    // height: 60,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 15,
    elevation: 5,
    
  }  
})