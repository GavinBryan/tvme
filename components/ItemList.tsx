import { FlashList } from "@shopify/flash-list";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

type Item = {
  id: string;
  title: string;
  description: string;
};

type ItemListProps = {
  items: Item[];
};

export function ItemList({ items }: ItemListProps) {
  const renderItem = ({ item }: { item: Item }) => (
    <ThemedView style={styles.item}>
      <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
      <ThemedText>{item.description}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <FlashList
        data={items}
        renderItem={renderItem}
        estimatedItemSize={100}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    gap: 8,
  },
});
