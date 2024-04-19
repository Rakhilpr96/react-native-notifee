import notifee from '@notifee/react-native';
import React from 'react';
import {View} from 'react-native';
import {notificationProps} from '../utility/notifeeUtils';
import Button from './button';

const QuickNotify = () => {
  async function onDisplayNotification() {
    const NotifyProps = notificationProps({
      title: 'Quick Notification',
      body: 'You have received a quick notification',
    });
    // Display a notification
    await notifee.displayNotification(NotifyProps);
  }

  return (
    <View style={{marginVertical: 10}}>
      <Button title="Show Notification" onPress={onDisplayNotification} />
    </View>
  );
};

export default QuickNotify;
