
import { 
  Pressable, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

export default function App() {

  const {
    container, 
    btn, 
    btnText
  } = styles

  const handleClick = () =>  alert("ok")

  return (
    <View style={container} >
      <Text>App</Text>
      <Pressable style={btn} onPress={handleClick}>
        <Text style={btnText}>Clique aqui</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    width:200,
    height:40,
    backgroundColor:'#0000FF',
    justifyContent:'center',
    alignItems:'center'
  },
  btnText:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize:16
  }
});
