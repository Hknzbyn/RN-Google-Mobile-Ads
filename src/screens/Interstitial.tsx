import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Title from '../components/Title';

import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy'; // your AdMob interstitial ID

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'], // if you want to target specific audience  or topic
});
const Interstitial = () => {
  const [loaded, setInterstitialLoaded] = useState(false);
  const [trigger, setTrigger] = useState(false);

  //:load Interstitial Ads
  const loadInterstitial = () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setInterstitialLoaded(true);
        //: Interstitial is loaded
      }
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setInterstitialLoaded(false);

        //:reload interstitial
        interstitial.load();
      }
    );

    //:load interstitial ads
    interstitial.load();

    return () => {
      unsubscribeClosed();
      unsubscribeLoaded();
    };
  };

  useEffect(() => {
    loadInterstitial();

    //:trigger to show interstitial ads
    // 1. add your condition&trigger here
    // 2. you can trigger with react-navigation || redux || mobx || contextAPI
    if (trigger) {
      interstitial.loaded ? interstitial.show() : null;
    }

    return () => {};
  }, [trigger]);

  //V1. if interstitial ads is loaded, show activity indicator
  const RunInterstitial = () => {
    return (
      <Pressable
        style={styles.button}
        onPress={() => {
          // interstitial.show();
          setTrigger(true);
        }}>
        {loaded ? (
          <Text>Show Interstitial</Text>
        ) : (
          <ActivityIndicator size='small' color='black' />
        )}
      </Pressable>
    );
  };

  //V2. if interstitial ads is loaded, disable button
  const RunInterstitial2 = () => {
    return (
      <Pressable
        style={[
          styles.button,
          { backgroundColor: loaded ? 'lightblue' : 'gray' },
        ]}
        disabled={loaded ? false : true}
        onPress={() => {
          // interstitial.show();
          setTrigger(true);
        }}>
        <Text>Show Interstitial</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Title.H1 title='Interstitial' />

      <View style={{ width: '100%', alignItems: 'center' }}>
        <Title.H2 title={'Is interstitial loaded: ' + loaded} />
        <RunInterstitial />
        <RunInterstitial2 />
      </View>
    </View>
  );
};

export default Interstitial;

const styles = StyleSheet.create({
  container: {
    height: '75%',
    width: '100%',
    backgroundColor: 'steelblue',
  },
  button: {
    backgroundColor: 'lightblue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 175,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
