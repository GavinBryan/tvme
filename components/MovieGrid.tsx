import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { TMDBMovie, getPosterUrl } from "@/services/tmdb";

type MovieGridProps = {
  movies: TMDBMovie[];
};

const { width } = Dimensions.get("window");
const numColumns = 2;
const spacing = 8;
const itemWidth = (width - spacing * (numColumns + 1)) / numColumns;

export function MovieGrid({ movies }: MovieGridProps) {
  const renderItem = ({ item }: { item: TMDBMovie }) => (
    <ThemedView style={styles.movieContainer}>
      <Image
        source={{ uri: getPosterUrl(item.poster_path) }}
        style={styles.movieImage}
        contentFit="cover"
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText numberOfLines={2} style={styles.title}>
          {item.title}
        </ThemedText>
        <ThemedText style={styles.year}>
          {new Date(item.release_date).getFullYear()}
        </ThemedText>
        <ThemedView style={styles.ratingContainer}>
          <ThemedText style={styles.rating}>
            ★ {item.vote_average.toFixed(1)}
          </ThemedText>
        </ThemedView>
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
        keyExtractor={(item) => item.id.toString()}
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
  year: {
    fontSize: 12,
    color: Colors.dark.icon,
    marginTop: 2,
  },
  ratingContainer: {
    marginTop: 4,
  },
  rating: {
    fontSize: 12,
    color: "#FFD700",
  },
});
