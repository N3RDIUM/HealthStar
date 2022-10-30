import { StyleSheet, StatusBar } from "react-native";

////////////////////////
// TODO: Add colors
////////////////////////

export default StyleSheet.create({
    androidSafeArea: {
        backgroundColor: "#6190ff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    HeaderContainer: {
        backgroundColor: "#00289166",
        height: "12%",
        // glow below
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        blurRadius: 5,
    },
    HeaderView: {
        backgroundColor: "#4079ffdd",
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
    Container: {
        backgroundColor: "#fff",
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
        color: "#222",
        alignSelf: "center",
        margin: "10%",
        marginTop: "69%",
        textAlign: "center",
    },
    GettingStartedButton: {
        backgroundColor: "#145bff66",
        color: "#fff",
        fontSize: 18,
        padding: "5%",
        borderRadius: 10,
        textAlign: "center",
        flexDirection: "row",
        margin: "2%"
    },
    GettingStartedBack: {
        backgroundColor: "#145bff66",
        color: "#fff",
        fontSize: 18,
        padding: "5%",
        borderRadius: 10,
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "1%",
        left: "1%",
    },
    FlexRow: {
        flexDirection: "row",
    },
    ProfileTitle: {
        fontSize: 24,
        color: "#000",
        alignSelf: "center",
        margin: "2%",
    },
    ProfileDescriptionContainer: {
        backgroundColor: "#eee",
        width: "90%",
        borderRadius: 10,
        padding: "5%",
        margin: "2%",
    },
    ProfileImage: {
        width: 256,
        height: 256,
        borderRadius: 64,
        alignSelf: "center",
        margin: "2%",
    },
});
