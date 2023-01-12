import {Button, Image, Platform, SafeAreaView, StyleSheet, Text, View} from "react-native";
import LogoSrc from "../../logo.png";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../../redux/slices/home.slice";

export default function TestComponent() {
    const value = useSelector(state => state.counter.value)

    const dispatch = useDispatch()


    return(
        <SafeAreaView style={styles.root}>
            <Image style={styles.logo} source={LogoSrc} />
            <Text style={styles.text}>Hello from React Native!</Text>
            <Text> {value} </Text>
            <Button title={"Increment"} onPress={() => dispatch(increment())}/>
            <View style={styles.platformRow}>
                <Text style={styles.text}>Platform: </Text>
                <View style={styles.platformBackground}>
                    <Text style={styles.platformValue}>{Platform.OS}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        minHeight: Platform.OS === "web" ? "100vh" : undefined,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    text: {
        fontSize: 28,
        fontWeight: "600",
    },
    platformRow: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    platformValue: {
        fontSize: 28,
        fontWeight: "500",
    },
    platformBackground: {
        backgroundColor: "#ececec",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#d4d4d4",
        paddingHorizontal: 6,
        borderRadius: 6,
        alignItems: "center",
    },
});