import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Import useIsFocused

import { doc, getDoc, collection, setDoc } from 'firebase/firestore';
import { storage, db } from '../firebase';

const Profile = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); 

  const [id, setId] = useState('');
  const [Class, setClass] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [pName, setPname] = useState('');
  const [pContact, setPcontact] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (isFocused) {
      const uid = 'AmitPatel'; // Replace with your user ID or fetch it from your authentication state
      const docRef = doc(db, 'User', uid);

      const fetchData = async () => {
        try {
          const snap = await getDoc(docRef);

          if (snap.exists()) {
            const data = snap.data();
            setId(data.studentId);
            setClass(data.class);
            setEmail(data.emailId);
            setContact(data.contactNumber);
            setPcontact(data.parentContact);
            setPname(data.parentName);
            setAddress(data.Address);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching Firestore data:', error);
        }
      };

      fetchData();
    }
  }, [isFocused]);



  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ width: 377, height: 44, backgroundColor: "white", marginBottom: 10 }} />
      <View style={{ width: 375, height: 42, backgroundColor: "white", marginTop: 14, paddingLeft: 20, paddingRight: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 30, width: 98 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
          }}>
            <Entypo name="chevron-thin-left" size={26} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontFamily: "Ubuntu-Regular", marginBottom: 3 }}>Profile</Text>
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

      <View style={{ marginTop: 35, width: 375, height: 412 }}>

        <View style={{ width: 335, height: 56, marginHorizontal: 20, paddingVertical: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <View style={{ width: 124, height: 36, backgroundColor: "white", marginHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontFamily: "Ubuntu-Regular" }}>Amit Patel</Text>
          </View>

          <Image source={require("../assets/user.jpg")}
            style={{
              borderRadius: 300,
              width: 56,
              height: 56,
              borderWidth: 5,
              borderColor: 'white'
            }}
          />

        </View>

        <View style={{ height: 324, width: 335, borderRadius: 20, backgroundColor: "#DCD9EF", marginHorizontal: 25, paddingHorizontal: 20, paddingVertical: 20 }}>
          <View style={{ height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24}}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Student ID Number:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>{id}</Text> 
          </View>

          <View style={{ height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24}}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Class/Grade:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>{Class}</Text> 
          </View>

          <View style={{ height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24}}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Contact Number:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>{contact}</Text> 
          </View>

          <View style={{ height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24}}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Email Address:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>{email}</Text> 
          </View>

          <View style={{ height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24}}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Parent/Guardian:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>{pName}</Text> 
          </View>

          <View style={{ height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24}}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Parent Contact:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>{pContact}</Text> 
          </View>

          <View style={{ height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Address:</Text>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>{address}</Text> 
          </View>
        </View>

      </View>

    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})