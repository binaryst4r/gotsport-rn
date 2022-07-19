import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native";
import {LOCALHOST_IP} from '@env'
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 28 }}>
      <StatusBar style={'auto'} />
      <View style={{height: '100%', width: '100%'}}>
        <WebView 
          style={styles.container}
          source={{ uri: LOCALHOST_IP }}
        />
      </View>
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
