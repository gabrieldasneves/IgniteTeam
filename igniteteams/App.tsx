import { Groups } from "@screens/Groups";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme";
import { Loading } from "@components/loading";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";
export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      {fontsloaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
