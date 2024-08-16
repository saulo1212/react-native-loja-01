import { View,Text,StyleSheet } from "react-native";

export default function About(){

    const {container} = styles;

    return (
        <View style={container}>
            <Text>Sobre</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})