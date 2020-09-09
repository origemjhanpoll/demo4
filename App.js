import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Screen1 from "./pages/screen1";
import Screen2 from "./pages/screen2";

export default function App() {
  return (
    <Router>
      <Stack key="root" tabs>
        <Scene key="screen1" component={Screen1} title="Screen1" />
        <Scene key="screen2" component={Screen2} title="Screen2" />
      </Stack>
    </Router>
  );
}
