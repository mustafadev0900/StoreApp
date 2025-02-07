import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Images";
import Colors from "../assets/Colors";

interface UserProfileProps {
  profileImage?: string;
  name?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
    
    profileImage = Images.profile,
    name = "Georgia",

}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image source={profileImage } style={styles.image} />
      </TouchableOpacity>
      <View style = {styles.textContainer} >
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>Let's start designing</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 25,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5, 
    marginRight: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  textContainer: {
    gap: 5
  },
  name: {
    fontSize: 25,
    fontWeight: "500",
    color: Colors.title_color,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "400",
    color: Colors.caption_color
  },
});

export default UserProfile;
