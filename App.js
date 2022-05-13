import { useRef } from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, Animated, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/*import { createStackNavigator } from '@react-navigation/stack';*/
/*import NavigationStack from './src/Navigation/NavigationStack';*/
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationTab from './src/Navigation/NavigationTab';
/*import NavigationDrawer from './src/Navigation/NavigationDrawer';  */
/*import LoginScreen from './src/Components/LoginScreen';
import RegisterScreen from './src/Components/RegisterScreen'; */
/* import SplashScreen from './src/Screens/SplashScreen';
import OnboardingScreen from './src/Screens/OnboardingScreen';
import LoginScreen from './src/Screens/LoginScreen'; */
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';

//Plus....
import plus from './assets/plus.png';

// Font Awesome Icons....
import {FontAwesome5} from '@expo/vector-icons';


/* const AppStack = createStackNavigator(); */

const Tab =  createBottomTabNavigator();

const App = () =>{
  //Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          showLabel: false,
          // Floating Tab bar
          style:{
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 20,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10
            }
          }
        }}>
          <Tab.Screen name={"Home"} component={HomeScreen} options={{
            tabBarIcon: ({focused}) => (
              <View style={{
                // centrig Tab Button...
                position: 'absolute',
              }}>
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? 'red' : 'gray'}
                >
                </FontAwesome5>
              </View>
            )
          }} listeners={({navigation, route}) => ({
            //Onpress Update...
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

          <Tab.Screen name={"Search"} component={SearchScreen} options={{
            tabBarIcon: ({focused}) => (
              <View style={{
                // centrig Tab Button...
                position: 'absolute',
              }}>
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? 'red' : 'gray'}
                >
                </FontAwesome5>
              </View>
            )
          }} listeners={({navigation, route}) => ({
            //Onpress Update...
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen> 

          <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
            tabBarIcon: ({focused}) => (
              <TouchableOpacity>
                <View style={{
                  width: 60,
                  height: 60,
                  marginBottom: 45,
                  backgroundColor: '#FF1818',
                  borderRadius: 50,
                  justifyContent: 'center', 
                  alignItems: 'center'
                }}>
                  <Image source={plus} style={{
                    width: 25,
                    height: 25,
                    tintColor: 'white'
                  }}></Image>
                </View>
              </TouchableOpacity>
            )
          }} listeners={({navigation, route}) => ({
            //Onpress Update...
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

          <Tab.Screen name={"Notifications"} component={LoginScreen} options={{
            tabBarIcon: ({focused}) => (
              <View style={{
                // centrig Tab Button...
                position: 'absolute',
              }}>
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? 'red' : 'gray'}
                >
                </FontAwesome5>
              </View>
            )
          }} listeners={({navigation, route}) => ({
            //Onpress Update...
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

          <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
            tabBarIcon: ({focused}) => (
              <View style={{
                // centrig Tab Button...
                position: 'absolute',
              }}>
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? 'red' : 'gray'}
                >
                </FontAwesome5>
              </View>
            )
          }} listeners={({navigation, route}) => ({
            //Onpress Update...
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
          
        </Tab.Navigator>

          <Animated.View style={{
            width: getWidth() - 20,
            height: 2,
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 80,
            //Horizontal padding = 20....
            left: 35,
            borderRadius: 20,
            transform: [
              { translateX: tabOffsetValue }
            ]
          }}> 
          </Animated.View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

function getWidth(){
  let width = Dimensions.get('window').width

  //Horizontal Padding = 20....
  width = width - 80

  //Total five Tabs
  return width / 5
}


function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

/* function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}
 */

/* function NotificationScreens() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
} */


function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}



export default App;

/* export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTheRealApp: true,
    };
  }

  SplashScreenTimer = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('result');
      }, 5000);
    });
  };

  async componentDidMount() {
    const data = await this.SplashScreenTimer();
    if(data !== null){
      this.setState({showTheRealApp: false});
    }
  }

  render() {
    if(this.state.showTheRealApp){
      return <SplashScreen />
    }
    return <OnboardingScreen />
  }

  
} */






/* export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SplashScreen>
          <AppStack.Navigator headerMode='none'>
            <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name="Login" component={LoginScreen} />            
          </AppStack.Navigator>
        </SplashScreen>
      </SafeAreaProvider>

    </NavigationContainer> */



      /* <RegisterScreen /> */
       /* <LoginScreen />  */
    /* <NavigationContainer>
      <NavigationStack />
     <NavigationDrawer/>
      <NavigationTab />
    </NavigationContainer> */
  //);
//}

