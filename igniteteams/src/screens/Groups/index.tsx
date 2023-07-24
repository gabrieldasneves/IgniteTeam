import { Header } from "@components/header";
import { Container } from "./styles";
import { Highlight } from "@components/highlight";
import { GroupCard } from "@components/groupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/listEmpty";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={
          <ListEmpty message="Cadastre seu primeiro grupo!" />
        }
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
    </Container>
  );
}
