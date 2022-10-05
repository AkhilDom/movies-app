import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider } from 'native-base';
import AppStack from './src/app_components/stack/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Header /> */}
      {/* <Tabs/> */}
      <AppStack />
      <StatusBar style="light" />
    </NativeBaseProvider>
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
