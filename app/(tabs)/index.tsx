import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ItemList } from "@/components/ItemList";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const exampleItems = [
  {
    id: "1",
    title: "Welcome to TVMe",
    description: "Your personal TV show tracking app",
  },
  {
    id: "2",
    title: "Track Your Shows",
    description: "Keep track of your favorite TV shows and episodes",
  },
  {
    id: "3",
    title: "Discover New Content",
    description: "Find new shows based on your preferences",
  },
  {
    id: "4",
    title: "Stay Updated",
    description: "Get notifications for new episodes",
  },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.listContainer}>
        <ItemList items={exampleItems} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  listContainer: {
    flex: 1,
    height: 400, // FlashList requires a fixed height
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
