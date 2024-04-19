import notifee, {AndroidImportance, Notification} from '@notifee/react-native';

export const channelId = 'pending_surveys';

export const createChannelId = async () => {
  // Create a channel (required for Android)
  await notifee.createChannel({
    id: channelId,
    name: 'Pending Surveys',
    sound: 'default',
    importance: AndroidImportance.HIGH,
  });
};

export const deleteChannel = async (channelId: string) => {
  await notifee.deleteChannel(channelId);
};

export const getChannelId = async () => {
  // Returns null if no channel could be matched to the given ID.
  const channel = await notifee.getChannel(channelId);
  return channel;
};

type NotificationProps = {
  title: string;
  body: string;
};

export const notificationProps = ({title, body}: NotificationProps) => {
  const notificationProperties: Notification = {
    // id: 'xxx',
    title: title,
    body: body,
    android: {
      channelId: channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      showTimestamp: true,
      // loopSound: true,
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
      // badgeCount: 20,
    },
    ios: {
      sound: 'default',
      // badgeCount: 20,
    },
  };
  return notificationProperties;
};
