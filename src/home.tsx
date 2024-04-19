import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import QuickNotify from './components/quickNotify';
import ScheduleNotify from './components/scheduleNotify';
import RepeatNotify from './components/repeatNotify';
import CancelNotify from './components/cancelNotify';
import {
  createChannelId,
  deleteChannel,
  getChannelId,
} from './utility/notifeeUtils';

const Home = () => {
  const createChannel = async () => {
    const channel = await getChannelId();
    if (channel) {
      // deleteChannel(channel.id);
      return;
    }
    createChannelId();
  };

  useEffect(() => {
    createChannel();
  }, []);
  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.appTitle}>Notification Examples</Text>
          <View style={styles.contentView}>
            <QuickNotify />
            <ScheduleNotify />
            <RepeatNotify />
            <CancelNotify />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  appTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    marginHorizontal: 15,
    marginTop: 20,
  },
  contentView: {
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
