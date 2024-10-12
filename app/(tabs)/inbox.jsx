import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Inbox = () => {
    return (
        <SafeAreaView>
            <View style={{
                height: "90%"
            }}>
                <Text>
                    Inbox
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Inbox
