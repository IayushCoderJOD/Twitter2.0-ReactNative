import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Search() {
    return (
        <View>
            <Text>
                Search page
            </Text>
            <Link href={"/accountDetails"}>
                <Text title='account details'>Account details</Text>
            </Link>
        </View>
    );
}
