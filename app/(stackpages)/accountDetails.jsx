import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function accountDetails() {
    return <View style={{
        width: "10%",
        height: "1200px",
        backgroundColor: "black",
    }}>
        <Link href={"/search"}>
            ⬅️Go back
        </Link>
        <Text>
            account details shown here.
        </Text>
    </View>
}