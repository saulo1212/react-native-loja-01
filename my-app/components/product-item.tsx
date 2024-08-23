import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Product } from "../types/product"
import { Link } from "expo-router"

type Props = {
    data: Product
}

export const ProductItem = ({data}: Props) => {

    const {id, image, title, description,price} = data
    const {container, img, titleP, descriptionP, priceP, info} = styles

    return(
       <Link href={`/product/${id}`} asChild>
            <Pressable style={container}>
                <Image 
                    style={img}
                    source={{uri:image}}
                    resizeMode="cover"
                />
                <View style={info}>
                    <Text style={titleP}>{title}</Text>
                    <Text style={descriptionP}>{description}</Text>
                    <Text style={priceP}>R${price.toFixed(2)}</Text>
                </View>
            </Pressable>
       </Link>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20
    },

    img:{
        width:100,
        height:100,
        borderRadius:10,
        backgroundColor:'#ccc',
        marginRight:20
    },
    info:{
        flex:1
    },
    titleP: {
        fontSize:16,
        fontWeight: 'bold',
        marginBottom:10
    },
    descriptionP:{
        fontSize:12,
        color: '#555',
        marginBottom:10
    },
    priceP:{
        fontSize:13,
        fontWeight:'bold',
        textAlign: 'right'
    }
})