import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateScreen = () => {
  const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    console.log(camera);
    console.log("camera", camera.takePictureAsync());
    const photo = await camera.takePictureAsync();
    console.log(photo.uri);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
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
});

export default CreateScreen;
