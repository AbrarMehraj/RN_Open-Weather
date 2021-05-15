import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('screen');

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />

      <ImageBackground
        style={{
          position: 'absolute',
          backgroundColor: 'skyblue',
          height,
          width,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          top: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}
        >
          <Icon name='plus' size={25} color='white' />
        </TouchableOpacity>

        <Text style={{ color: 'white', fontSize: 18 }}>Srinagar</Text>

        <TouchableOpacity>
          <Icon name='ellipsis-v' size={25} color='white' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 30,
  },
});
