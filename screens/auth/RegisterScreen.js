import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const initialState = {
  email: "",
  password: "",
  nickname: "",
};

export default function RegisterScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;

      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/fon.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
                width: dimensions,
              }}
            >
              <View>
                <Text style={styles.text}>Welcome!</Text>
              </View>

              <View>
                <Text style={styles.inputTitle}>NICKNAME</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.nickname}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, nickname: value }))
                  }
                />
              </View>

              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>

              <View>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN UP</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: "#ff1493",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Already have an account?
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#006400",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Sign In
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#6495ed",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    fontSize: 20,
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "#4169e1",
    borderColor: "transparent",
    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "transparent",
    //     borderColor: "#f0f8ff",
    //   },
    //   android: {
    //     backgroundColor: "#4169e1",
    //     borderColor: "transparent",
    //   },
    // }),
  },
  btnTitle: {
    // color: Platform.OS === "ios" ? "royalblue" : "#f0f8ff",
    color: "#f0f8ff",
    fontSize: 18,
  },
});
