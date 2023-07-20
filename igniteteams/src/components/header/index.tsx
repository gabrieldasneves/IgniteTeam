import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoimg from "@assets/logo.png";
type props = {
  showBackButton?: boolean;
};
export function Header({ showBackButton = false }: props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoimg} />
    </Container>
  );
}
