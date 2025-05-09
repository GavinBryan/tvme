import { View } from "react-native";

import { Colors } from "@/constants/Colors";

// This is a shim for web and Android where the tab bar is generally opaque.
export default function TabBarBackground() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: Colors.dark.background,
        borderTopWidth: 1,
        borderTopColor: Colors.dark.border,
      }}
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}
