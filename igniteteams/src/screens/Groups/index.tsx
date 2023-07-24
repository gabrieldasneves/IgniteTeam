import { Header } from "@components/header";
import { Container } from "./styles";
import { Highlight } from "@components/highlight";
import { GroupCard } from "@components/groupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera do mal",
    "turminha do balao",
    "brabos",
  ]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
