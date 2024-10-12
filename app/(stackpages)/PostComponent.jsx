import { StyleSheet, Text, View } from "react-native";

// Function to generate a random color
const getRandomColor = () => {
    const colors = ['#378b29', '#7A7ADB', '#972239'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const styles = StyleSheet.create({
    outerDiv: {
        backgroundColor: "black",
        borderRadius: 12,
        padding: 15,
        height: "auto",
        margin: 2,
    },
    title: {
        width: "40%",
        margin: 4,
        color: "white",
        borderRadius: 5,
        padding: 3,
    },
    Tweet: {
        backgroundColor: "white",
        color: "black",
        borderRadius: 5,
        shadowColor: "white",
        padding: 5,
    },
});

const PostComponent = ({ Title, Tweet }) => {
    // Get a random background color for the title
    const randomTitleBackgroundColor = getRandomColor();

    return (
        <View style={styles.outerDiv}>y
            <Text style={[styles.title, { backgroundColor: randomTitleBackgroundColor }]}>
                👨🏻‍🦱 {Title}
            </Text>
            <Text style={styles.Tweet}>{Tweet}</Text>
        </View>
    );
};

export default PostComponent;
