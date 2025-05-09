import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

type Movie = {
  id: string;
  title: string;
  imageUrl: string;
};

type MovieGridProps = {
  movies: Movie[];
};

const { width } = Dimensions.get("window");
const numColumns = 2;
const spacing = 8;
const itemWidth = (width - spacing * (numColumns + 1)) / numColumns;

export function MovieGrid({ movies }: MovieGridProps) {
  const renderItem = ({ item }: { item: Movie }) => (
    <ThemedView style={styles.movieContainer}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.movieImage}
        contentFit="cover"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText numberOfLines={2} style={styles.title}>
          {item.title}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <FlashList
        data={movies}
        renderItem={renderItem}
        estimatedItemSize={300}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  listContent: {
    padding: spacing,
  },
  movieContainer: {
    width: itemWidth,
    margin: spacing / 2,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: Colors.dark.card,
  },
  movieImage: {
    width: "100%",
    aspectRatio: 2 / 3,
  },
  titleContainer: {
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
});
