import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Add an Expense" onPress={() => navigation.navigate('AddExpense')} />
    </View>
  );
}
