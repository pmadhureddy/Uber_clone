import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const UberTypeRow = ({uberType}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={uberType.image} />
      <View style={styles.middileContainer}>
        <Text style={styles.type}>
          {uberType.type}
          <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. $27</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
