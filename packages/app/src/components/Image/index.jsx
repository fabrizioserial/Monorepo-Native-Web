import {Image as ImageNative, Platform} from "react-native";

export default function Image({source="",style,props}) {
    return(
        <ImageNative source={ Platform.OS === 'web' ? source : {uri: source}} style={style} {...props}/>
    )
}