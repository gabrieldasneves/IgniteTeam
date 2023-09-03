import { Header } from "@components/header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { HeaderList, NumbersOfPlayers } from "@components/Filter/styles";

export function Players() {
  const [team, setTeam] = useState("TEAMA");
  const [players, setPlayers] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Group name"
        subtitle="Add your friends and create teams"
      />

      <Form>
        <Input placeholder="Member" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["TEAMA", "TEAMB"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              onPress={() => setTeam(item)}
              isActive={item === team}
              title={item}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
    </Container>
  );
}
