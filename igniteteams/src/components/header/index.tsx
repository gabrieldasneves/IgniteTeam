import { Container, Logo } from "./styles";
import logoimg from "@assets/logo.png";
export function Header() {
  return (
    <Container>
      <Logo source={logoimg} />
    </Container>
  );
}
