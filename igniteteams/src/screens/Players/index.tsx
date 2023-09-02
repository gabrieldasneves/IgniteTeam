import { Header } from "@components/header";
import { Container } from "./styles";
import { Highlight } from "@components/highlight";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Group name"
        subtitle="Add your friends and create teams"
      />
    </Container>
  );
}
