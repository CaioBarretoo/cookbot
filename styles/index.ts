import { StyleSheet } from "react-native";
import { lightTheme } from './theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: lightTheme.background
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
        color: lightTheme.titleColor
    },
    subtitle: {
        fontSize: 16,
        fontStyle: "italic",
        marginBottom: 20,
        color: lightTheme.subtitle
    },
    input: {
        width: "100%",
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: lightTheme.border,
        backgroundColor: lightTheme.cardBackground,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    },
    button: {
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: lightTheme.primary,
        paddingHorizontal: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center"
    },
    card: {
        borderWidth: 0,
        marginTop: 30,
        width: "100%",
        borderRadius: 20,
        padding: 20,
        backgroundColor: lightTheme.cardBackground,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: lightTheme.text
    },
    cardText: {
        fontSize: 16,
        color: lightTheme.text
    },
    placeHolder: {
        color: lightTheme.placeholder
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 5
    },
    themeToggle: {
        padding: 12,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3
    }
});

export default styles;
