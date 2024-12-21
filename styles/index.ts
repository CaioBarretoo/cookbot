import { StyleSheet } from "react-native";

/**
 * Estilos globais do aplicativo
 */
export default StyleSheet.create({
    /**
     * Container principal da tela
     */
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        paddingTop: 40
    },

    /**
     * Estilo do título principal
     */
    title: {
        fontSize: 40,
        fontWeight: "800",
        marginBottom: 8,
        letterSpacing: -1
    },

    /**
     * Estilo dos subtítulos
     */
    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8,
        textAlign: 'center'
    },

    /**
     * Campo de entrada de texto
     */
    input: {
        width: "100%",
        height: 60,
        borderRadius: 20,
        paddingHorizontal: 20,
        borderWidth: 1.5,
        marginBottom: 24,
        marginTop: 8,
        fontSize: 16
    },

    /**
     * Botão principal
     */
    button: {
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingHorizontal: 24
    },

    /**
     * Texto do botão
     */
    buttonText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFFFFF",
        textAlign: "center"
    },

    /**
     * Card da receita
     */
    card: {
        marginTop: 30,
        width: "100%",
        borderRadius: 24,
        padding: 24
    },

    /**
     * Título do card
     */
    cardTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 12
    },

    /**
     * Texto do card
     */
    cardText: {
        fontSize: 16,
        lineHeight: 24
    },

    /**
     * Container do cabeçalho
     */
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },

    /**
     * Botão de alternar tema
     */
    themeToggle: {
        padding: 12,
        borderRadius: 16
    }
});
