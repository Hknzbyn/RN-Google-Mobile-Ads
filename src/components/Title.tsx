import { View, Text } from 'react-native';
import React from 'react';

const Title = {
  H1: ({ title }: { title: string }) => {
    return (
      <Text
        style={{
          fontSize: 26,
          color: '#fff',
          textAlign: 'center',
          fontWeight: '600',
          borderBottomWidth: 1,
          borderBottomColor: '#fff',
          marginBottom: 10,
        }}>
        {title}
      </Text>
    );
  },
  H2: ({ title }: { title: string }) => {
    return (
      <Text
        style={{
          fontSize: 20,
          color: '#fff',
          textAlign: 'left',
          fontWeight: '400',
          marginBottom: 3,
          marginTop: 7,
        }}>
        {title}
      </Text>
    );
  },
};

export default Title;
