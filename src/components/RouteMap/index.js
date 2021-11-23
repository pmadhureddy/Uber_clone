import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCjSKhFOP_pccKEKGG6TlWyVNu2v2_KtEM';
  const origin = {latitude: 28.456208, longitude: -16.259098};
  const destination = {latitude: 28.451208, longitude: -16.253098};
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
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="hotpink"
        />
        <Marker coordinate={origin} title="Origin" />
        <Marker coordinate={destination} title="Destination" />
      </MapView>
    </View>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
