import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel if only necessary</Text>
      <Text style={styles.messageText}>
        Upgrading this package often requires the font files linked to your
        projects to be updated as well. If the automatic linking works for you,
        running this again should update the fonts. Otherwise you need to follow
        the steps outlined in the installation section.
      </Text>
      <Text style={styles.learnMoreText}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b80ff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -6,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 10,
  },
  messageText: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMoreText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
