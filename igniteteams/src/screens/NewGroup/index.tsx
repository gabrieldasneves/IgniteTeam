import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="New Team"
          subtitle="Create your new team to add friends"
        />
        <Button title="Create" />
      </Content>
    </Container>
  );
}
