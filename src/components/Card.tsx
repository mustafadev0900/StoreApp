import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Images from "../assets/Images";
import Colors from "../assets/Colors";

const {height, width } = Dimensions.get("window");
interface CardProps {
    cardImage?: string;
    title?: string;
    subtext?: string;
}

const Card: React.FC<CardProps> = ({
    cardImage = Images.iamge1,
    title = "Harvest",
    subtext = "Bold desgin meets timeless beauty"
}) => {
    return (
        <ImageBackground source={ cardImage } style={styles.card} imageStyle={styles.image}>
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtext}>{subtext}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Apply to my room</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    card: {
        width: width * 0.9,  
        height: height * 0.58,
        overflow: "hidden",
        marginVertical: 10,
    },
    image: {
        // borderRadius: 16,
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 16,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.subtext_color,
        marginBottom:15
    },
    subtext: {
        fontSize: 16,
        color: Colors.subtext_color,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
    },
    applyButton: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    applyButtonText: {
        color: "black",
        fontSize: 14,
    },
    detailsButton: {
        borderWidth: 1,
        borderColor: Colors.grey,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: "transparent",
    },
    detailsButtonText: {
        color: "white",
        fontSize: 14,
    },
});

export default Card;
