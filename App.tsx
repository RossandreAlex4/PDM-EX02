import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from './navigation/stackNavigation';
import { NavigatorTab } from './navigation/tabNavigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <NavigationContainer>
      <NavigatorTab />
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
