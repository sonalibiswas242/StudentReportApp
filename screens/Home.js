import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from '@expo-google-fonts/inter';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

let customFonts = {
  'Ubuntu-Regular': require('../fonts/Ubuntu-Regular.ttf'),
  'Ubuntu-Medium': require('../fonts/Ubuntu-Medium.ttf'),
};

const Home = () => {
  const navigation = useNavigation();
  const currentDate = new Date();
  const monthYearString = currentDate.toLocaleString('default', { month: 'short', year: 'numeric' });

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ width: 377, height: 44, backgroundColor: "white", marginBottom: 10 }} />
      <View style={{ width: 375, height: 42, backgroundColor: "white", marginTop: 14, paddingLeft: 20, paddingRight: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View
          style={{
            backgroundColor: "#edecf1",
            borderRadius: 20,
            height: 38,
            width: 38,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View>
            <Feather name="menu" size={24} color="black" />
          </View>
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

      <View style={{ height: 835, width: 375, marginTop: 29 }}>
        <View style={{ height: 39, width: 140, backgroundColor: "white", marginLeft: 22, paddingLeft: 7, paddingTop: 1 }}>
          <Text style={{ fontSize: 10, fontFamily: "Ubuntu-Regular" }}>Welcome back,</Text>
          <Text style={{ fontSize: 20, fontFamily: "Ubuntu-Regular" }}>Amit Patel</Text>
        </View>

        <View style={{ height: 144, width: 335, backgroundColor: "#978CD0", marginHorizontal: 20, marginVertical: 15, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
          <View style={{ height: 52, width: 119, marginLeft: 15, marginTop: 10 }}>
            <Text style={{ fontSize: 10, fontFamily: "Ubuntu-Regular", marginBottom: 3, color: "white" }}>Attendance</Text>

            <View style={{ height: 30, width: 125, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 20, fontFamily: "Ubuntu-Regular", color: "white", fontWeight: '600' }}>{monthYearString}</Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
            </View>
          </View>

          <View style={{
            width: 120,
            height: 120,
            borderRadius: 75,
            borderWidth: 10,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            left: 30,
            opacity: 0.75, // Adjust this value for the desired opacity (50% in this case)
          }}/>
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white',
              right: 52
            }}>93%</Text>
          
        </View>


        <View style={{ width: 375, height: 140, marginBottom: 20, marginTop: 15 }}>
          <View style={{ height: 24, width: 105, paddingLeft: 10, marginLeft: 20, marginBottom: 5, paddingVertical: 2 }}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Medium", color: "black", }}>Quick Links</Text>
          </View>

          <View style={{ width: 335, height: 110, backgroundColor: "#DCD9EF", marginHorizontal: 20, borderRadius: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 22 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ReportCard')
                }}
                style={{ height: 70, width: 43, alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#978CD0",
                    borderRadius: 20,
                    borderColor: "#5140B1",
                    borderWidth: 1,
                    height: 38,
                    width: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <MaterialIcons name="article" size={24} color="white" />
                  </View>
                </View>
                <View style={{ height: 20, width: 52, paddingHorizontal: 4, marginTop: 18 }}>
                  <Text style={{ fontSize: 11, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Report</Text>
                </View>
              </TouchableOpacity>

              <View style={{ height: 70, width: 43, alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#978CD0",
                    borderRadius: 20,
                    borderColor: "#5140B1",
                    borderWidth: 1,
                    height: 38,
                    width: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <MaterialIcons name="list-alt" size={24} color="white" />
                  </View>
                </View>
                <View style={{ height: 20, width: 48, marginTop: 18 }}>
                  <Text style={{ fontSize: 11, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Syllabus</Text>
                </View>
              </View>

              <View style={{ height: 70, width: 45, alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#978CD0",
                    borderRadius: 20,
                    borderColor: "#5140B1",
                    borderWidth: 1,
                    height: 38,
                    width: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <MaterialIcons name="square-foot" size={24} color="white" />
                  </View>
                </View>
                <View style={{ height: 20, width: 52, marginTop: 18, }}>
                  <Text style={{ fontSize: 11, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Unit Test</Text>
                </View>
              </View>

              <View style={{ height: 70, width: 43, alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#978CD0",
                    borderRadius: 20,
                    borderColor: "#5140B1",
                    borderWidth: 1,
                    height: 38,
                    width: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <MaterialIcons name="payment" size={24} color="white" />
                  </View>
                </View>
                <View style={{ height: 20, width: 52, marginTop: 18 }}>
                  <Text style={{ fontSize: 11, fontFamily: "Ubuntu-Regular", color: "gray", fontWeight: 600 }}>Payment</Text>
                </View>
              </View>

            </View>
          </View>
        </View>

        <View style={{ width: 375, height: 428, marginTop: 10 }}>
          <View style={{ height: 24, width: 196, paddingLeft: 10, marginLeft: 20, marginBottom: 5, paddingVertical: 2, }}>
            <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Medium", color: "black", }}>Upcoming Events</Text>
          </View>

          <View style={{ height: 52, width: 335, backgroundColor: "#DCD9EF", marginHorizontal: 20, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 5, marginBottom: 5 }}>

            <View style={{ height: 21, width: 220, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14, marginVertical: 12 }}>
              <MaterialIcons name="article" size={24} color="black" />
              <Text style={{ fontSize: 14, color: "black", fontFamily: "Ubuntu-Medium" }}>Science Fair Showcase</Text>
            </View>

            <View style={{ height: 23, width: 30, marginHorizontal: 12, alignItems: "center", marginBottom: 5 }}>
              <Text style={{ fontSize: 9, fontFamily: "Ubuntu-Medium", color: "black", lineHeight: 9 }}>JAN</Text>
              <Text style={{ fontSize: 22, fontFamily: "Ubuntu-Medium", color: "black", fontWeight: 600, lineHeight: 22 }}>18</Text>
            </View>

          </View>

          <View style={{ height: 52, width: 335, backgroundColor: "#DCD9EF", marginHorizontal: 20, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 5, marginBottom: 5 }}>

            <View style={{ height: 21, width: 180, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14, marginVertical: 12 }}>
              <AntDesign name="Trophy" size={22} color="black" />
              <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Medium", color: "black", }}>Maths Olympiad</Text>
            </View>

            <View style={{ height: 23, width: 30, marginHorizontal: 12, alignItems: "center", marginBottom: 5 }}>
              <Text style={{ fontSize: 9, fontFamily: "Ubuntu-Medium", color: "black", lineHeight: 9 }}>JAN</Text>
              <Text style={{ fontSize: 22, fontFamily: "Ubuntu-Medium", color: "black", fontWeight: 600, lineHeight: 22 }}>24</Text>
            </View>

          </View>
          <View style={{ height: 52, width: 335, backgroundColor: "#DCD9EF", marginHorizontal: 20, borderRadius: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 5 }}>

            <View style={{ height: 21, width: 245, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14, marginVertical: 12 }}>
              <MaterialIcons name="sports-basketball" size={24} color="black" />
              <Text style={{ fontSize: 14, fontFamily: "Ubuntu-Medium", color: "black", }}>Sports Day ExtraVaganza</Text>
            </View>

            <View style={{ height: 23, width: 30, marginHorizontal: 12, alignItems: "center", marginBottom: 5 }}>
              <Text style={{ fontSize: 9, fontFamily: "Ubuntu-Medium", color: "black", lineHeight: 9 }}>JAN</Text>
              <Text style={{ fontSize: 22, fontFamily: "Ubuntu-Medium", color: "black", fontWeight: 600, lineHeight: 22 }}>25</Text>
            </View>

          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default Home;
