import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Title from '../components/Title';

import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy'; // your AdMob rewarded ID

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'], // if you want to target specific audience  or topic
});

const Rewarded = () => {
  const [reward, setReward] = useState(0);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        console.log('Rewarded ad is loaded');
      }
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      () => {
        // reward is earned here
        setReward(reward + 1);
      }
    );

    // Start loading the rewarded ad if it hasn't been loaded yet
    if (!rewarded.loaded) {
      rewarded.load();
    }

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, [rewarded]);

  const RunRewarded = () => {
    return (
      <Pressable
        disabled={!rewarded.loaded}
        style={styles.button}
        onPress={() => rewarded.show()}>
        {!rewarded.loaded ? (
          <ActivityIndicator size='large' color='#fff' />
        ) : (
          <Text> Show Rewarded </Text>
        )}
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Title.H1 title='Rewarded' />

      <View style={{ width: '100%', alignItems: 'center' }}>
        <Title.H2 title={'Number of reward: ' + reward} />
        <RunRewarded />
      </View>
    </View>
  );
};

export default Rewarded;

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
