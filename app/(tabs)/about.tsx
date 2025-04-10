import { View, Text, StyleSheet } from "react-native"

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Desenvolvido Por Arthur Carelli</Text>
            <Text style={styles.text}>Etapas Finalizadas: 6</Text>
            {/* Próxima Etapa: https://docs.expo.dev/tutorial/screenshot/ */}
            <Text style={styles.text}>Ultima Atualização: 7 de Abril 2025</Text>
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