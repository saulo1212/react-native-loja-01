import { Link, router, Stack } from "expo-router";
import { View,Text,StyleSheet, Pressable, Button } from "react-native";

export default function Screen(){

    const {container,button} = styles;

    const handleClick = () => {
        router.navigate('/about')
    }

    const  handleAddButton = () => {
        alert("ok")
    }


    return (
        <View style={container}>
            <Stack.Screen 
                options={{
                    title: 'Inicio',
                    headerRight: () => <Button onPress={handleAddButton} title="Adicionar" />
                }}
            />
            <Text>Ola,Tudo bem</Text>
          
                <Pressable onPress={handleClick} style={button}>
                    <Text>Sobre </Text>
                </Pressable>

                <Link href="/profile/1">Perfil 1</Link>
                <Link href="/profile/2">Perfil 2 </Link>
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