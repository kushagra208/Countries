import { View, Text, ScrollView, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { Button, Dialog, TextInput } from 'react-native-paper'
import { AllCountries, COUNTRY } from '../queries/query'
import { useQuery } from '@apollo/client'

const Countries = () => {

  const { loading, error , data } = useQuery(AllCountries);
  const [openDialog , setOpenDialog ] = useState(false);
  const [code, setCode] = useState("AD");
  const [open , setOpen] = useState(false);
  const hideDialog = () => {
    setOpenDialog(!openDialog);
  }
  const country = useQuery(COUNTRY , { variables : { code } })
  const getData = () => {
    setOpen(!open)
  }
  const hideDialog2 = () => {
    setOpen(!open);
  }
  return (
    <>
    <View style = {{ backgroundColor: "#fff" , flex: 1 , alignItems: "center" , paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
        <ScrollView>
            <SafeAreaView>
                <Text style = {styles.heading}>Countries</Text>
                <Text style = {{ fontWeight: 300 , fontSize: 18 , letterSpacing: 2 , textTransform: "uppercase" , textAlign: "center" , marginTop: 50}} >Country Code</Text>
                <TextInput
                style = {styles.input}
                placeholder = "Country (Capital Letters)"
                onChangeText={setCode}
                />
                <Button
                mode='elevated' 
                textColor = "#900"
                buttonColor='#fff'
                style = {styles.showBtn}
                onPress={getData}
                >
                <Text style = {{ letterSpacing: 2 }}>
                    SHOW
                </Text>
                </Button>
                <Button
                mode='elevated' 
                textColor = "#900"
                buttonColor='#fff'
                style = {styles.showBtn}
                onPress={hideDialog}
                >
                <Text style = {{ letterSpacing: 2 }}>
                    SHOW ALL
                </Text>
                </Button>
            </SafeAreaView>
        </ScrollView>
    </View>
    <Dialog visible = {open} style = {{ backgroundColor: "#fff" , overflow: "hidden"}} onDismiss={hideDialog2}>
      <Dialog.Title>Result</Dialog.Title>
      <Dialog.Content>
        { country.loading ? <Loader /> : <>
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <Text style = {{ fontSize: 18 , color: "#900"}}>Name: </Text>
          <Text>{country.data.country?.name.length > 25 ? `${country.data.country?.name.slice(0 , 25)}...` : country.data.country?.name}</Text>
        </View>
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <Text style = {{ fontSize: 18 , color: "#900"}}>Code: </Text>
          <Text>{country.data.country?.code}</Text>
        </View>
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <Text style = {{ fontSize: 18 , color: "#900"}}>Native: </Text>
          <Text>{country.data.country?.native.length > 25 ? `${country.data.country?.native.slice(0 , 25)}...` : country.data.country?.native}</Text>
        </View>
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <Text style = {{ fontSize: 18 , color: "#900"}}>Phone: </Text>
          <Text>{country.data.country?.phone}</Text>
        </View>
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <Text style = {{ fontSize: 18 , color: "#900"}}>Currency: </Text>
          <Text>{country.data.country?.currency}</Text>
        </View>
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <Text style = {{ fontSize: 18 , color: "#900"}}>Continent Code: </Text>
          <Text>{country.data.country?.continent.code}</Text>
        </View>
        <View style = {{ flexDirection: "row" , alignItems: "center" , gap: 10 }}>
          <Text style = {{ fontSize: 18 , color: "#900"}}>Continent Name: </Text>
          <Text>{country.data.country?.continent.name}</Text>
        </View>
        </>}
      </Dialog.Content>
    </Dialog>
    <Dialog visible = {openDialog} style = {{ backgroundColor: "#fff" , overflow: "hidden"}} onDismiss={hideDialog}>
        <ScrollView>
      <Dialog.Title>Result</Dialog.Title>
      <Dialog.Content>
          <View style = {{ flexDirection: "row" , justifyContent: "space-between" , alignItems: "center" , flex: 1 }}>
            <View>
              <Text style = {{ fontSize: 18 , color: "#900" }}>S No</Text>
            </View>
            <View>
              <Text style = {{ fontSize: 18 , color: "#900" }}>Name</Text>
            </View>
            <View>
              <Text style = {{ fontSize: 18 , color: "#900" }}>Code</Text>
            </View>
          </View>
          {loading ? <Loader /> : data.countries.map((el, i) => (
            <View key = {i} style = {{ flexDirection: "row" , justifyContent: "space-between" , alignItems: "center" , flex: 1 }}>
            <View>
              <Text>{i+1}</Text>
            </View>
            <View>
              <Text>{el.name.length > 20 ? `${el.name.slice(0, 20)}...` : el.name}</Text>
            </View>
            <View>
              <Text>{el.code}</Text>
            </View>
            </View>
          ))}
      </Dialog.Content>
        </ScrollView>
    </Dialog>
      </>
  )
}

export default Countries


const styles = StyleSheet.create({
    heading:{
      fontSize: 40,
      textAlign: "center",
      marginTop: 25,
      marginBottom: 20,
      color: "#900",
    
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
      elevation: 10,
    },
    showBtn: {
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
      width: 250,
      borderColor: "#b5b5b5",
      padding: 5,
      paddingLeft: 15,
      borderRadius: 5,
      marginVertical: 20,
      fontSize: 15,
    }
  })