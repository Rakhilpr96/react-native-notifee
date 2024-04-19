import notifee from '@notifee/react-native';
import React from 'react';
import {Alert, View} from 'react-native';
import Button from './button';

const CancelNotify = () => {
  async function cancelNotifications() {
    await notifee.cancelAllNotifications();
    Alert.alert('Success', 'All notifications has been cleared.');
  }

  return (
    <View style={{marginVertical: 10}}>
      <Button title="Clear All Notifications" onPress={cancelNotifications} />
    </View>
  );
};

export default CancelNotify;
