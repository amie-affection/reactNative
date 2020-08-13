import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
              <TouchableOpacity onPress={() => {}} >
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
    height: 300,
      marginTop: 50,
    alignItems: 'center',
    },
    snap: {
        marginTop: 250,
        color: '@fff',
  }
});

export default CreateScreen;
