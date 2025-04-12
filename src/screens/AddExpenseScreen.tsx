import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>; // or 'AddExpense'

export default function HomeScreen({ navigation }: Props) {
  // ...
}


// Define your route params (even if they're empty for now)
type RootStackParamList = {
  Home: undefined;
  AddExpense: undefined;
};

// Typing props using NativeStackScreenProps
type Props = NativeStackScreenProps<RootStackParamList, 'AddExpense'>;

export default function AddExpenseScreen({ navigation }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Add New Expense</Text>
      <TextInput placeholder="Amount" keyboardType="numeric" />
      <TextInput placeholder="Description" />
      <Button title="Save" onPress={() => navigation.goBack()} />
    </View>
  );
}
