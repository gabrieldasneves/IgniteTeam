import { Groups } from "@screens/Groups";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme";
import { Loading } from "@components/loading";
export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      {fontsloaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
