import { View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Ops! Not Found' }} />
            <View style={styles.container}>
                <Link href='/' style={styles.button}>
                    Go to Home Screen
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
