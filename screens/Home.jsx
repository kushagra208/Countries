import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet, TouchableOpacity ,ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, clearMessage } from '../redux/authReducer'
import { Button } from 'react-native-paper'
const Home = ({ navigation }) => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { loading , message , error } = useSelector((state) => state.auth);

    useEffect(() => {
      if (error) {
        alert(error);
        dispatch(clearError());
      }
      if (message) {
        alert(message);
        dispatch(clearMessage());
      }
    } ,[alert , error , message  , dispatch ])
  return (
    <>
    <View style = {{ backgroundColor: "#fff" , flex: 1 , justifyContent : "center" , paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      <TouchableOpacity
      style = {styles.addBtn}
      onPress = {() => navigation.navigate("continents")}
      >
        <Text style = {{ color: "white" , letterSpacing: 1 }}>
          CONTINENTS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style = {styles.addBtn}
      onPress = {() => navigation.navigate("countries")}

      >
        <Text style = {{ color: "white" , letterSpacing: 1 }}>
          COUNTRIES
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style = {styles.addBtn}
      onPress = {() => navigation.navigate("languages")}

      >
        <Text style = {{ color: "white" , letterSpacing: 1 }}>
          LANGUAGES
        </Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  heading:{
    fontSize: 40,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#474747",
  
  },
  addBtn:{
    backgroundColor: "#900",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  }
})