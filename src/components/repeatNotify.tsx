import notifee, {
  IntervalTrigger,
  TimeUnit,
  TriggerType,
} from '@notifee/react-native';
import React from 'react';
import {Alert, View} from 'react-native';
import {notificationProps} from '../utility/notifeeUtils';
import Button from './button';

const RepeatNotify = () => {
  async function onCreateTriggerNotification() {
    // Create a time-based trigger
    const trigger: IntervalTrigger = {
      type: TriggerType.INTERVAL,
      interval: 15,
      timeUnit: TimeUnit.MINUTES,
    };

    const NotifyProps = notificationProps({
      title: 'Repeated Notification',
      body: 'You have received a repeated notification',
    });

    // Create a trigger notification
    await notifee.createTriggerNotification(NotifyProps, trigger);

    Alert.alert('Success', 'Set Repeated Notification');
  }

  return (
    <View style={{marginVertical: 10}}>
      <Button
        title="Show notification on every 15 minutes"
        onPress={onCreateTriggerNotification}
      />
    </View>
  );
};

export default RepeatNotify;
