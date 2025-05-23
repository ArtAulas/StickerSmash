import { View, Text, StyleSheet } from "react-native"

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Desenvolvido Por Arthur Carelli</Text>
            <Text style={styles.text}>Etapas Finalizadas: 7</Text>
            {/* Próxima Etapa: https://docs.expo.dev/tutorial/platform-differences/ */}
            <Text style={styles.text}>Ultima Atualização: 12 de Abril 2025</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#25292e',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'white'
    }
})