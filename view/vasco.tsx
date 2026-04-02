import { View, Text, Image } from "react-native";
import { NativeBottomTabNavigationProp } from "@react-navigation/bottom-tabs/unstable";
import { TabParamList } from "../navigation/tabNavigation";

type Props = {
  navigation: NativeBottomTabNavigationProp<TabParamList, 'Vasco'>;
};

export const Vasco = ({navigation} : Props ) => {
    return(
        <View style={{ flex: 1, padding: 20 }}>
               <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 30, marginTop:100 }}>
                      <Image
                        source={require('../assets/vasco.png')}
                        style={{ width: 160, height: 160}}
                      />
                      <Text style={{ fontSize: 80 }}>
                        VASCO!
                      </Text>
                    </View>
        </View>
    )
    

}