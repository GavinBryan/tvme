import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#1A1A1A", dark: "#1A1A1A" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.profileHeader}>
          <ThemedView style={styles.avatarContainer}>
            <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={styles.avatar}
            />
          </ThemedView>
          <ThemedText type="title">Your Name</ThemedText>
          <ThemedText>@username</ThemedText>
        </ThemedView>

        <ThemedView style={styles.statsContainer}>
          <ThemedView style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Shows</ThemedText>
            <ThemedText>0</ThemedText>
          </ThemedView>
          <ThemedView style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Episodes</ThemedText>
            <ThemedText>0</ThemedText>
          </ThemedView>
          <ThemedView style={styles.statItem}>
            <ThemedText type="defaultSemiBold">Following</ThemedText>
            <ThemedText>0</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Recent Activity</ThemedText>
          <ThemedText>No recent activity</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  headerImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0.3,
  },
  profileHeader: {
    alignItems: "center",
    gap: 8,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: Colors.dark.border,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.dark.border,
  },
  statItem: {
    alignItems: "center",
    gap: 4,
  },
  section: {
    gap: 8,
  },
});
