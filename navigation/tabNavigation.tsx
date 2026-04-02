import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorStack } from "./stackNavigation";
import { Vasco } from "../view/vasco";

export type TabParamList = {
    Stack: undefined;
    Vasco: undefined;            
};

const Tab = createBottomTabNavigator<TabParamList>();

export function NavigatorTab(){
    return(
        <Tab.Navigator
            screenOptions={{
            tabBarActiveTintColor: 'red',
            }}
        >
            <Tab.Screen
                name="Stack"
                component={NavigatorStack}
                options={{headerShown: false }}
                
            />

            <Tab.Screen
                name="Vasco"
                component={Vasco}
                options={{headerShown: false}}
            />
        </Tab.Navigator>
    )
}