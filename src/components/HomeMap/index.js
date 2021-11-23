import React from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.456208,
          longitude: -16.259098,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        {cars.map(car => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                transform: [{rotate: `${car.heading}deg`}],
              }}
              source={car.image}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
