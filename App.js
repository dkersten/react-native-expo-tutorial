import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, SafeAreaView, Button, Alert} from 'react-native';

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      {/* alert popup */}
      <Button
        color="orange"
        title="Click Me For Alert"
        onPress={() =>
          Alert.alert (`Oh my god we're having a fire...`, `sale`, [
            {text: 'yes', onPress: () => console.log ('Yes')},
            {text: 'no', onPress: () => console.log ('no')},
          ])}
      />
      {/* prompt popup */}
      <Button
        color="blue"
        title="Click Me For Prompt"
        onPress={() =>
          Alert.prompt (`Oh my god we're having a fire...`, `sale`, text =>
            console.log (text)
          )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
