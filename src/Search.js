import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const { width, height } = Dimensions.get('screen');

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{
            backgroundColor: '#E5E5E5',
            justifyContent: 'center',
            height: 45,
            borderColor: '#DCDCDC',
            borderWidth: 1,
            borderRadius: 50,
            paddingLeft: 20,
          }}
          placeholder='Search Cities'
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
});
