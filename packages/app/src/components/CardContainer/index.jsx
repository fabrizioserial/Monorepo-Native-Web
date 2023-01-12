import {View, Text, StyleSheet, Platform} from "react-native";
import Image from '../Image/index'
import {darkBlue1, darkBlue3, white} from "../../utils/styles/const";

export default function CardContainer({title, information, image}) {
    return(
        <View style={style.root}>
            <Image style={style.image} source={image}/>
            <View style={style.informationContainer}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.information}>{information}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        height: 300,
        width: Platform.OS === 'web' ? 700: '100%',
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: darkBlue1,
        marginVertical: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: darkBlue3,
        color:white,
    },
    informationContainer:{
        display: "flex",
        flexDirection: "column",
        paddingLeft: 10,
        flex:1,
    },
    title:{
        fontSize:25,
        marginBottom: 10,
        fontWeight: "bold",
        color: white,
    },
    information: {
        fontSize:16,
        color: white,
    },
    image:{
        width:100,
        height: "auto",
        objectFit: "cover",
    }
})