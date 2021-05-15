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
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='light' backgroundColor='skyblue' />

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
          paddingHorizontal: 20,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}
        >
          <AntDesign name='plus' size={24} color='white' />
        </TouchableOpacity>

        <Text style={{ color: 'white', fontSize: 18 }}>Srinagar</Text>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name='dots-vertical'
            size={24}
            color='white'
          />
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
