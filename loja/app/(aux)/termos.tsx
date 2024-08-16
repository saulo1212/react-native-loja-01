import { Stack } from "expo-router";
import { View,Text,StyleSheet, Pressable, Button } from "react-native";

export default function  Termos(){

    const {container,button} = styles;

    return (
        <View style={container}>
            <Stack.Screen 
                options={{
                    title: 'Termos',
                }}
            />
           
          
                <Pressable  style={button}>
                    <Text>Termos</Text>
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