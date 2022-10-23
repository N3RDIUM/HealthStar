import { StyleSheet, StatusBar } from "react-native";

////////////////////////
// TODO: Add colors
////////////////////////

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    androidSafeArea: {
        backgroundColor: "#ddd",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    HeaderContainer: {
        backgroundColor: "#bbb",
        height: "12%",
    },
    HeaderView: {
        backgroundColor: "#ccc",
        height: "50%",
        justifyContent: "center",
        flex: 0,
        flexDirection: "row",
    },
    HeaderTitle: {
        fontSize: 26.9,
        fontWeight: "bold",
        color: "#000",
        alignSelf: "center",
    },
    GettingStartedContainer: {
        backgroundColor: "#ddd",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    GettingStartedTitle: {
        fontSize: 24,
        color: "#000",
        alignSelf: "center",
    },
    GettingStartedDescription: {
        fontSize: 18,
        color: "#444",
        alignSelf: "center",
        margin: "10%",
        marginTop: "69%",
        textAlign: "center",
    },
    GettingStartedButton: {
        backgroundColor: "#0003",
        color: "#fff",
        fontSize: 18,
        padding: "5%",
        borderRadius: 10,
        textAlign: "center",
    },
});
