import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    androidSafeArea: {
        flex: 1,
        backgroundColor: "#ddd",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
