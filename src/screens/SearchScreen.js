import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Image,Text} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

const SearchScreen= () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <MaterialTabs  
        items={['max', '-', 'min']}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#FF5733"
        indicatorColor="white"
        activeTextColor="white"
        allowFontScaling={true}
        textStyle ={{
          fontSize: 10,
          borderRadius: 5
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 5,
    width: 150,
    left: 200,
    top: 417
  },
 
});


export default SearchScreen;