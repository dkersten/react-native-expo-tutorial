import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test Text</Text>
      <TouchableHighlight onPress={() => console.log ('image tapped')}>
        <Image
          source={{
            width: 300,
            height: 200,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
