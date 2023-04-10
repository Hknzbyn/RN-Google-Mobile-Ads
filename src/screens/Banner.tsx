import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import Title from '../components/Title';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Title.H1 title='Banner' />
      <ScrollView>
        <Title.H2 title='BANNER' />
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />

        <Title.H2 title='LARGE_BANNER' />
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.LARGE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
        <Title.H2 title='FULL_BANNER' />
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('FULL_BANNER loaded');
          }}
          onAdFailedToLoad={(error) => {
            console.error('FULL_BANNER failed to load: ', error);
          }}
        />

        <Title.H2 title='LEADERBOARD' />
        <BannerAd
          unitId={TestIds.GAM_BANNER}
          size={BannerAdSize.LEADERBOARD}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
        <Title.H2 title='MEDIUM_RECTANGLE' />
        <BannerAd
          unitId={TestIds.GAM_BANNER}
          size={BannerAdSize.MEDIUM_RECTANGLE}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />

        <Title.H2 title='ANCHORED_ADAPTIVE_BANNER' />
        <BannerAd
          unitId={TestIds.GAM_BANNER}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: '75%',
    width: '100%',
    backgroundColor: 'steelblue',
    marginLeft: 5,
  },
});
