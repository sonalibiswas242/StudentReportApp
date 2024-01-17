import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Import useIsFocused

import { doc, getDoc, collection, setDoc, getDocs } from 'firebase/firestore';
import { storage, db } from '../firebase';

const Notifications = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); 

  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFocused) {
          const notificationsRef = collection(db, 'notifications');
          const querySnapshot = await getDocs(notificationsRef);

          if (!querySnapshot.empty) {
            const notificationsData = [];
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              notificationsData.push({
                id: doc.id,
                message: data.message,
                date: data.Date,
              });
            });

            // Update the state with the array of notifications
            setNotifications(notificationsData);
          } else {
            console.log('No notifications found.');
          }
        }
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      }
    };

    fetchData();
  }, [isFocused]);
  
  return (
    <View>
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ width: 377, height: 44, backgroundColor: "white", marginBottom: 10 }} />
      <View style={{ width: 375, height: 42, backgroundColor: "white", marginTop: 14, paddingLeft: 20, paddingRight: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 30, width: 160 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
          }}>
            <Entypo name="chevron-thin-left" size={26} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontFamily: "Ubuntu-Regular", marginBottom: 3 }}>Notifications</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notifications')
          }}
          style={{
            backgroundColor: "#edecf1",
            borderRadius: 20,
            height: 38,
            width: 38,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View>
            <MaterialIcons name="notifications-none" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      

    </ScrollView>
    <View style={{ height: 768, width: 375, paddingTop: 35, backgroundColor: "white" }}>
      {notifications.map((notification) => (
        <View key={notification.id} style={{ height: 123, width: 335, backgroundColor: "#DCD9EF", marginHorizontal: 20, borderRadius: 16, paddingHorizontal: 20, paddingVertical: 12, marginBottom:6 }}>

          <View style={{ height: 84, width: 295 }}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray" }}>{notification.message}</Text>
          </View>

          <View style={{ height: 15, width: 295 }}>
            <Text style={{ fontSize: 10, fontFamily: "Ubuntu-Regular", color: "gray", textAlign: 'right' }}>Jan 17</Text>
          </View>


      </View>
      ))}


        </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})