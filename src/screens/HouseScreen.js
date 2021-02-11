import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HouseScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <Text style={{color: colors.text}}>House Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </View>
    );
};

export default HouseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});