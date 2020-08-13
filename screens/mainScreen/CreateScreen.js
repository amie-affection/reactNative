import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Camera } from "expo-camera";
import * as Location from "expo-location";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    console.log(camera);
    // console.log("camera", camera.takePictureAsync());

    // const photo = await camera.takePictureAsync();
    // console.log(photo.uri);
    const location = await Location.getCurrentPositionAsync();
    // setPhoto(photo.uri);
    // console.log(photo);
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("Posts", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {/* {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200 }}
            />
          </View>
        )} */}
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity onPress={sendPhoto} style={styles.buttonContainer}>
          <Text style={styles.sendTitle}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    marginHorizontal: 2,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: {
    color: "#fff",
  },

  snapContainer: {
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    height: 200,
    width: 200,
  },
  buttonContainer: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#20b2aa",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendTitle: {
    color: "#20b2aa",
    fontSize: 20,
  },
});

export default CreateScreen;
