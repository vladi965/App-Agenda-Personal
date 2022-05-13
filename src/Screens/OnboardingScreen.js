import React from "react";
import { useNavigation } from "@react-navigation/native"; 
import { View, Text, Button, StyleSheet, TouchableOpacity,  Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({selected}) =>{
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

  return (
    <View 
    style={{
        width:5,
        height:5,
        marginHorizontal:3,
        backgroundColor
    }}>
    </View>
  )
}


const Skip = ({...props}) =>(
  <TouchableOpacity
    {...props}
  >
    <Text style={{fontSize:16, marginLeft: 5}}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) =>(
  <TouchableOpacity
    {...props}
    >
      <Text style={{fontSize:16, marginRight: 5}}>Next</Text>
  </TouchableOpacity>
    

);
const Done = ({...props}) =>(
  <TouchableOpacity
    style ={{marginHorizontal:8}}
    {...props}
  >
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
    
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../assets/onboarding-img1.png")} />,
          title: "Onboarding 1",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
            backgroundColor: "#fdeb93",
            image: <Image source={require("../../assets/onboarding-img2.png")} />,
            title: "Onboarding 2",
            subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
      },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
