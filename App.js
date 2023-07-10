import { StatusBar } from "expo-status-bar";
import * as Location from 'expo-location';
import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";


const {width: SCREEN_WIDTH} = Dimensions.get('window');
// const SCREEN_WIDTH = Dimensions.get('window').width;
// console.log(SCREEN_WIDTH);

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    // console.log(permission);
    if(!granted) {
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGooleMaps:false});
    setCity(location[0].city);

  };
  useEffect(()=>{
    ask();
  }, []);
  return <View style = {styles.container}>
    <StatusBar style="dark"/> 
    <View style={styles.city}>
      <Text style={styles.cityName}>{city}</Text>
    </View>
    <ScrollView 
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator = {false}
    // indicatorStyle="white" <- 이 props는 ios만 적용됨. 이처럼 모든 props가 모든 기기에 적용되는 것은 x
    contentContainerStyle={styles.weather}> 
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "skyblue",
  },
  city:{
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName:{
    fontSize: 68,
    fontWeight: 500,
  },
  weather:{
    //ScrollView는 스크린을 넘어가기에 flex가 무의미
  },
  day:{
    //여기 flex:1, 을 지우기 전과 뭐가 다른지 헷갈림.
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});