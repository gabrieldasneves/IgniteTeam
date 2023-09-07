import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();
  function HandleNew() {
    navigation.navigate("players", { group: "rocket" });
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="New Team"
          subtitle="Create your new team to add friends"
        />
        <Input placeholder="Group name" />
        <Button title="Create" onPress={HandleNew} style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
