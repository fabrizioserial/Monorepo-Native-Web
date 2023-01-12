import {
    Button,
    Image,
    Platform,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {useGetLaunchesQuery} from "../../redux/services/spacex.api";
import CardContainer from "../../components/CardContainer";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../../redux/slices/home.slice";
import {darkBlue1, darkBlue2} from "../../utils/styles/const";
export default function Home() {
    const {data} = useGetLaunchesQuery()
    const dispatch = useDispatch()

    const value = useSelector(state => state.counter.value)
    return (
        <SafeAreaView style={style.root}>
            <Text>Home</Text>
            <Text>This is the home page.</Text>
            <Text>{value}</Text>
            <Button title={"increase"} onPress={()=>dispatch(increment())}/>
            <ScrollView>
                <View style={style.cardContainer}>
                    {
                        data?.slice(0,10)?.map((launch) => <CardContainer title={launch.mission_name} information={launch.details} image={launch.links.flickr_images[0]}/>)
                    }
                </View>
            </ScrollView>


        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    root: {
        backgroundColor: darkBlue2,
    },
    cardContainer:{
        width: "100%",
        height: Platform.OS === "web" ? "100vh" : undefined,
        overflow: "scroll",
        display: 'flex',
        flexDirection:'column',
        alignItems:'center'
    }
})