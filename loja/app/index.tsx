import { router } from "expo-router";
import { View,Text,StyleSheet, Pressable } from "react-native";

export default function Screen(){

    const {container,button} = styles;

    const handleClick = () => {
        router.navigate('/about')
    }

    return (
        <View style={container}>
            <Text>Ola,Tudo bem</Text>
          
                <Pressable onPress={handleClick} style={button}>
                    <Text>Sobre </Text>
                </Pressable>
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