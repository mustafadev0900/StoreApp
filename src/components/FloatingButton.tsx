import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Images from "../assets/Images"; 
import Colors from "../assets/Colors";

const FloatingButton: React.FC = () => {
  const [isSelected, setIsSelected] = useState<"home" | "sparkle">("home"); 

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isSelected === "home" && styles.selected]}
        onPress={() => setIsSelected("home")}
        activeOpacity={0.8}
      >
        <Image source={Images.home_icon} style={[styles.icon, isSelected === "home" && styles.activeIcon]} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, isSelected === "sparkle" && styles.selected]}
        onPress={() => setIsSelected("sparkle")}
        activeOpacity={0.8}
      >
        <Image source={Images.magin_icon} style={[styles.icon, isSelected === "sparkle" && styles.activeIcon]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 40,
    padding:8,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  selected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Colors.title_color
  },
  activeIcon: {
    tintColor: Colors.subtext_color
  },
});

export default FloatingButton;
