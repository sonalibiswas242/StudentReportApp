import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, storage } from '../firebase';
import * as DocumentPicker from 'expo-document-picker';
import { ref, put, getDownloadURL } from 'firebase/storage';
import { Entypo, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { v4 as uuidv4 } from "uuid";

const ReportCard = () => {
  const navigation = useNavigation();
  const [documentList, setDocumentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reportCards'));
        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDocumentList(documents);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  /*const pickAndUploadDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result && result.uri) {
        const response = await fetch(result.uri);
        const blob = await response.blob();
        const storageRef = ref(storage, `myDocs/${result.name}`);
        await uploadBytes(storageRef, blob);
  
        
        const downloadURL = await getDownloadURL(storageRef);
        const docData = {
          docName: result.name,
          doc: downloadURL,
        };
  
        const docRef = await addDoc(collection(db, 'reportCards'), docData);
  
        console.log('Document uploaded successfully. URL:', downloadURL);
        console.log('Document added to reportCards collection with ID:', docRef.id);
      }
    } catch (error) {
      console.error('Error picking/uploading document:', error);
    }
  };
  <TouchableOpacity
        onPress={pickAndUploadDocument}
        style={{
          position: 'absolute',
          bottom: 10,
          right: 32,
          backgroundColor: '#978CD0',
          borderRadius: 30,
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
          <Feather name="plus" size={30} color="white" />
  
      </TouchableOpacity>
  
  */

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ width: 377, height: 44, backgroundColor: "white", marginBottom: 10 }} />
      <View style={{ width: 375, height: 42, backgroundColor: "white", marginTop: 14, paddingLeft: 20, paddingRight: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 30, width: 107 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
          }}>
            <Entypo name="chevron-thin-left" size={26} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontFamily: "Ubuntu-Regular", marginBottom: 3 }}>Report</Text>
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



      <View style={{ height: 550, width: 375, marginTop: 35 }}>
        {documentList.map((document) => (
          <View key={document.id} style={styles.documentContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#978CD0',
                  borderRadius: 20,
                  borderColor: '#5140B1',
                  borderWidth: 1,
                  height: 38,
                  width: 38,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="article" size={24} color="white" />
              </View>
              <Text style={styles.documentName}>{document.docName}</Text>
            </View>

            <TouchableOpacity onPress={() => handleDownload(document)}>
              <AntDesign name="clouddownloado" size={28} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      


    </ScrollView>
  )
}

export default ReportCard

const styles = StyleSheet.create({
  documentContainer: {
    height: 70,
    width: 335,
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderWidth: 1,
    borderColor: '#9E77ED',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 10,
  },

  documentName: {
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
    color: 'black',
    paddingLeft: 18,
  },

})