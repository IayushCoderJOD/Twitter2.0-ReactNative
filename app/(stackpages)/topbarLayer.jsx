import { Text, View } from "react-native";


const TopbarLayer = () => {
    return (
        <View style={{
            display: "flex",
            paddingLeft: 8,
            paddingRight: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white"
        }}>
            <View style={{
                backgroundColor: "black",
                borderRadius: 70,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: 32,
                width: 32,
            }}>
                <Text style={{ fontSize: 20 }} >👨🏻‍🦱</Text>
            </View>
            <View>

                <Text>X</Text>
            </View>
            <View>
                <Text style={{
                    backgroundColor: "black",
                    padding: 2,
                    fontSize: 15,
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 5,
                    color: "white"
                }}>Upgrade</Text>
            </View>

        </View >

    )
}


export default TopbarLayer