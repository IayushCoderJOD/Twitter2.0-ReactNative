import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notification() {
    return (
        <SafeAreaView>
            <View>
                <Text>
                    This is the notifications page.
                </Text>
            </View>
        </SafeAreaView>
    )
}