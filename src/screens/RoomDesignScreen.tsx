import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from "react-native";
import Images from "../assets/Images";
import UserProfile from "../components/UserProfile";
import Card from "../components/Card";
import FloatingButton from "../components/FloatingButton";

const dummyData = [
  {
    id: "1",
    image: Images.iamge1,
    title: "Harvest",
    subtext: "Bold design meets timeless beauty",
  },
  {
    id: "2",
    image: Images.iamge2,
    title: "Stoneworks",
    subtext: "A design that never fades",
  },
  {
    id: "3",
    image: Images.image3,
    title: "Solstice",
    subtext: "Minimalist, sleek, and stylish",
  },
];


const RoomDesignScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
        <TouchableOpacity>
            <Image source={Images.dots}  style = {styles.dots}/>
        </TouchableOpacity>
        <UserProfile />
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Card cardImage={item.image} title={item.title} subtext={item.subtext} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
        <FloatingButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    width: 20,
    height : 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    right: 20
  },
  cardContainer: {
    paddingVertical: 10,
    gap: 20
  },
  list: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  cardWrapper: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default RoomDesignScreen;
