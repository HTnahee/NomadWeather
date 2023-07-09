import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//View는 container, div 대신 View를 사용. 따라서 항상 import해야함
//모든 text는 text component 안에. 브라우저가 아니니까

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>제발 노우 에러</Text>
      <StatusBar style="auto" />
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
  text: {
    fontSize: 28,
    color: "red",
  }
});
