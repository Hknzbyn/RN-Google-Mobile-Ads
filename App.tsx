import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import 'expo-dev-client';
import { Banner, Interstitial, Rewarded } from './src/screens/';

export default function App() {
  const [adType, setAdType] = useState('banner');

  const ChangeAdTypeButton = ({ type }: { type: string }) => {
    return (
      <Pressable
        onPress={() => {
          setAdType(type);
        }}
        style={[
          styles.button,
          { backgroundColor: adType === type ? 'forestgreen' : 'darkgrey' },
        ]}>
        <Text style={{ color: '#fff', fontSize: 18 }}> {type} </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 30, fontSize: 26, color: '#fff' }}>
        Google Ads Sample
      </Text>
      <View
        style={{
          height: '15%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ChangeAdTypeButton type='banner' />
        <ChangeAdTypeButton type='rewarded' />
        <ChangeAdTypeButton type='interstitial' />
      </View>

      {adType === 'banner' && <Banner />}
      {adType === 'rewarded' && <Rewarded />}
      {adType === 'interstitial' && <Interstitial />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
