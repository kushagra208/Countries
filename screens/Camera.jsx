import { View, Text , StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Camera , CameraType } from "expo-camera"
import { Button } from "react-native-paper"
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from "expo-image-picker"

export default CameraComponent = ({ navigation , route }) => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera , setCamera ] = useState(null);

    if (!permission) {
        return <View />;
    }
  
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' , fontSize: 15 }}>We need your permission to show the camera</Text>
                <Button style = {{ backgroundColor: "#900" ,  width: "50%" , color: "#fff" , alignSelf: "center" , marginTop: 20 , padding: 5 }} onPress={requestPermission} title="grant permission" >
                    <Text style = {{ color: "#fff" , fontSize: 16 }}>
                        Grant Permission
                    </Text>
                </Button>
            </View>
        )
    }
  
    function toggleCameraType() {
      setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false) {
            alert("Permission to access camera roll is required");
            return;
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true , aspect: [1 , 1] , quality: 1
        });
        // console.log(data);
        if(route.params.updateProfile) return navigation.navigate("profile" , { image: data.assets[0].uri });
        else return navigation.navigate("register" , { image: data.assets[0].uri })

    }

    const clickPicture = async () => {
        const data = await camera.takePictureAsync();
        // console.log(data);
        if(route.params.updateProfile) return navigation.navigate("profile" , { image: data.assets[0].uri });
        else return navigation.navigate("register" , { image: data.assets[0].uri })

    }
  
    return (
        <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref = {(e) => setCamera(e)} />
            <View
            style = {{
                flexDirection: "row",
                position: "absolute",
                bottom: 10,
                justifyContent: "space-evenly",
                width: "100%",
            }}
            >
                <Icon name = "image" size = {40} color = "#fff" onPress = {openImagePickerAsync} />
                <Icon name = "camera" size = {40} color = "#fff" onPress = {clickPicture} />
                <Icon 
                name = "flip-camera-android"
                size = {40}
                color = "#fff"
                onPress = {toggleCameraType}
                />
            </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  