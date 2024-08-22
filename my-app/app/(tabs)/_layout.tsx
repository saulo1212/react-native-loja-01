import { Tabs } from "expo-router";
import FontAwesone from '@expo/vector-icons/FontAwesome'


export default function TabLayout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor: '#0000FF'}}>
            <Tabs.Screen 
                name="Home"
                options={{
                    title:'Inicio',
                    tabBarIcon: ({color}) => <FontAwesone 
                        size={28}
                        name="home"
                        color={color}
                    />
                }}
            />

            <Tabs.Screen 
                name="Categories"
                options={{
                    title:'Inicio',
                    tabBarIcon: ({color}) => <FontAwesone 
                        size={28}
                        name="archive"
                        color={color}
                    />
                }}
            />

            <Tabs.Screen 
                name="About"
                options={{
                    title:'Sobre mim',
                    tabBarIcon: ({color}) => <FontAwesone 
                        size={28}
                        name="user"
                        color={color}
                    />
                }}
            />

            
        </Tabs>
    )
}