import notifee from '@notifee/react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/home';

const App = () => {
  const requestNotificationPermission = async () =>
    await notifee.requestPermission();

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
