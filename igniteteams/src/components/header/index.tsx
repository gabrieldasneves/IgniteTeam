import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoimg from "@assets/logo.png";
type props = {
  showBackButton?: boolean;
};
export function Header({ showBackButton = false }: props) {
  const navigation = useNavigation();
  function HandleGoBack() {
    navigation.navigate("groups");
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={HandleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoimg} />
    </Container>
  );
}
