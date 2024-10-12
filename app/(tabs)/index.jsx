import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import PostComponent from "../(stackpages)/PostComponent";
import TopbarLayer from "../(stackpages)/topbarLayer";

const Index = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            <View>
                <TopbarLayer />
            </View>
            <Tab.Navigator>
                <Tab.Screen name="For you" component={HomeScreen} />
                <Tab.Screen name="Following" component={SettingsScreen} />
            </Tab.Navigator>
        </>
    );
};
export default Index;

function HomeScreen() {
    const [data, setData] = useState(null); // For the posts data
    const [username, setUsername] = useState(null); // For the user data

    useEffect(() => {
        // Fetching the user data (assuming you want the first user from the response)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsername(response.data[3]); // Getting the first user (you can adjust this as needed)
            })
            .catch(error => {
                console.error(error);
            });

        // Fetching the posts data
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ padding: 5, backgroundColor: "white" }}>
            <PostComponent
                key={item.id}
                Title={username?.name || "Loading.."}
                Tweet={item.body}
            />
        </View>
    );

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 100 }}
        />
    );
}

function SettingsScreen() {
    return (
        <Text>this is the SettingsScreen</Text>
    );
}
