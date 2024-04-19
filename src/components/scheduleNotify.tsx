import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';
import React from 'react';
import {Alert, View} from 'react-native';
import {notificationProps} from '../utility/notifeeUtils';
import Button from './button';

const ScheduleNotify = () => {
  async function onCreateTriggerNotification() {
    const now = Date.now();
    const date = new Date(now + 2 * 60 * 1000); // Adding 2 minutes (2 * 60 seconds * 1000 milliseconds)

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };

    const NotifyProps = notificationProps({
      title: 'Scheduled Notification',
      body: 'You have received a scheduled notification',
    });

    // Create a trigger notification
    await notifee.createTriggerNotification(NotifyProps, trigger);

    Alert.alert('Success', 'Scheduled Notification');
  }

  return (
    <View style={{marginVertical: 10}}>
      <Button
        title="Trigger a notification in 2 minutes"
        onPress={onCreateTriggerNotification}
      />
    </View>
  );
};

export default ScheduleNotify;
