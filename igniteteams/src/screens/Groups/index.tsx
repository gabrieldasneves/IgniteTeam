import { Header } from "@components/header";
import { Container } from "./styles";
import { Highlight } from "@components/highlight";
export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
