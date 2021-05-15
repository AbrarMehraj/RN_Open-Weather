import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
  {
    city: 'Srinagar',
    aqi: '22',
    min: 14,
    max: 25,
    current: 20,
    id: 'fds',
  },

  {
    city: 'Srinagar',
    aqi: '22',
    min: 14,
    max: 25,
    current: 20,
    id: 'fdsdf',
  },

  {
    city: 'Srinagar',
    aqi: '22',
    min: 14,
    max: 25,
    current: 20,
    id: 'dffds',
  },
];

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          backgroundColor: '#E5E5E5',
          borderRadius: 50,
          alignItems: 'center',
          paddingHorizontal: 10,
          borderColor: '#DCDCDC',
          borderWidth: 1,
          marginBottom: 10,
        }}
      >
        <Ionicons name='search-outline' size={24} color='black' />
        <TextInput
          style={{
            justifyContent: 'center',
            height: 45,

            paddingLeft: 20,
            flex: 1,
          }}
          placeholder='Search Cities'
        />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.cityItem}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View style={styles.left}>
                  <Text style={styles.color}>{item.city}</Text>
                  <View>
                    <Text style={styles.color}>
                      AQI {item.aqi} {item.min}/{item.max}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.color, { fontSize: 30 }]}>
                    {item.current}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
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
  cityItem: {
    padding: 25,
    backgroundColor: '#1ABBEE',
    marginTop: 10,
    borderRadius: 20,
  },
  color: {
    color: 'white',
  },
});
