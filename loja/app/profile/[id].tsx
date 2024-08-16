import { useLocalSearchParams, Stack } from "expo-router";
import { View,Text,StyleSheet} from "react-native";

export default function Perfil(){

    const {container,button} = styles;

    const {id} = useLocalSearchParams();


    return (
        <View style={container}>
            <Stack.Screen options={{title:'Perfil' + id}} />
            
            <Text>Perfil {id}</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:200,
        height:40,
        backgroundColor:'red',
         justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})