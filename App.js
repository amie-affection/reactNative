import React, { useState } from "react";
import {} from "react-native";

import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  if (isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
