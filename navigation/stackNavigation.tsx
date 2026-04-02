import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemView } from "../view/view";
import { AddItemView } from "../view/addView";

export type StackParamList = {
    List: undefined;
    Form: undefined;            
};

const Stack = createNativeStackNavigator<StackParamList>();

export function NavigatorStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="List"
                component={ItemView}
                options={{title: 'Lista de personagens', headerShown: false }}
                
            />

            <Stack.Screen
                name="Form"
                component={AddItemView}
                options={{title: 'Formulário de adição'}}
            />
        </Stack.Navigator>
    )
}