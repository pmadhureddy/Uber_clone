import React from 'react';
import {View, Text, Pressable} from 'react-native';
import UberTypeRow from '../UberTypeRow';
import uberTypes from '../../assets/data/types';
const UberTypes = () => {
  const confirm = () => {};
  return (
    <View>
      {uberTypes.map((uberType, index) => {
        return <UberTypeRow uberType={uberType} />;
      })}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: '#000',
          padding: 10,
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
