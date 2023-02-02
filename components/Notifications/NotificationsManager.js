import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';



export default {
  async enableNotifications(value) {
    if(!value) {
    Notifications.setNotificationHandler(()=>{})
    }
    else {
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})
    }

  },
  async scheduleNotification(reminder) {
    console.log("notifications are set.")
    const now =  Date.now();
    if(reminder.date < now) {
      console.error('attempting to set notifications in the past');
      return;
    }
    const seconds = (reminder.date - now) / 1000
    await Notifications.scheduleNotificationAsync({
    content: {
      title: "Exam reminders 📬",
      body: `${reminder.title}`,
      data: { data: reminder },
    },
    trigger: { seconds: seconds},
  });
  }
}