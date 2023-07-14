import { View, Text, ScrollView, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { Button, Dialog, TextInput } from 'react-native-paper'
import { AllContinents, CONTINENT } from '../queries/query'
import { useQuery } from '@apollo/client'

const Continent = () => {

  const { loading, error , data } = useQuery(AllContinents);
  const [openDialog , setOpenDialog ] = useState(false);
  const [code, setCode] = useState("AF");
  const [open , setOpen] = useState(false);
  const hideDialog = () => {
    setOpenDialog(!openDialog);
  }
  const continent = useQuery(CONTINENT , { variables : { code } })
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
                <Text style = {styles.heading}>Continents</Text>
                <Text>Continent Code</Text>
                <TextInput
                style = {styles.input}
                placeholder = "Continent"
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
      <ScrollView>

      <Dialog.Title>Result</Dialog.Title>
      <Dialog.Content>
        { continent.loading ? <Loader /> : <>
        <Text>Name: {continent.data.continent?.name}</Text>
        <Text>Code: {continent.data.continent?.code}</Text>
        <View>
          <Text>Countries:</Text>
          {continent.data.continent?.countries.map((el , i) => (
            <View key = {i}>
            <Text>Name: {el.name}</Text>
            <Text>Code: {el.code}</Text>
            </View>
          ))}
        </View>

        </>}
      </Dialog.Content>
    </ScrollView>
    </Dialog>
    <Dialog visible = {openDialog} style = {{ backgroundColor: "#fff" , overflow: "hidden"}} onDismiss={hideDialog}>
        <ScrollView>
      <Dialog.Title>Result</Dialog.Title>
      <Dialog.Content>
          <View style = {{ flexDirection: "row" , justifyContent: "space-between" , alignItems: "center" , flex: 1 }}>
            <View>
              <Text>S No</Text>
            </View>
            <View>
              <Text>Name</Text>
            </View>
            <View>
              <Text>Code</Text>
            </View>
          </View>
          {loading ? <Loader /> : data.continents.map((el, i) => (
            <View key = {i} style = {{ flexDirection: "row" , justifyContent: "space-between" , alignItems: "center" , flex: 1 }}>
            <View>
              <Text>{i+1}</Text>
            </View>
            <View>
              <Text>{el.name}</Text>
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

export default Continent


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
      marginVertical: 15,
      fontSize: 15,
    }
  })