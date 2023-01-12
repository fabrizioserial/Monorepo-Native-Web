import {Platform} from "react-native";
import {useSelector} from "react-redux";

export default function PrivateRoutes({navigation,children}) {
    const {user} = useSelector(state => state.user);
    const redirectToHome = () => {
        Platform.OS === 'web' ? window.location.href = '/' : navigation.navigate('Home')
    }
    return(
        user ? children : redirectToHome()
    )
}