import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,  } from 'react-native';
import { AddItemView } from './view/addView';
import { ItemView } from './view/view';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './navigation/stackNavigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      {/* <View>
        <AddItemView />
        <ItemView />
      </View> */}
      <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
