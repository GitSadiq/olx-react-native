import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Loginoption from "../screens/loginOption";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Dashboard from "../screens/dashboard";
import CreateAd from "../screens/createAd";
import CameraFeature from "../components/home/camera";
import ImagePickerExample from "../components/home/imagePicker";

export default function Navigate() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <MyTabs />
    </NavigationContainer>
  );
}

const stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        options={{ headerShown: false }}
        name="loginoption"
        component={Loginoption}
      />
      <stack.Screen name="signup" component={Signup} />
      <stack.Screen name="login" component={Login} />
    </stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (routeName === "Chat") {
            iconName = focused
              ? "ios-chatbox-ellipses-sharp"
              : "ios-chatbox-ellipses-outline";
          } else if (routeName === "Sell") {
            iconName = focused ? "pluscircle" : "pluscircleo";
          } else if (routeName === "Image") {
            iconName = focused ? "heart" : "hearto";
          } else if (routeName === "Account") {
            iconName = focused ? "account-key" : "account-key-outline";
          }

          {
            if (
              iconName === "home" ||
              iconName === "home-outline" ||
              iconName === "ios-chatbox-ellipses-outline" ||
              iconName === "ios-chatbox-ellipses-sharp"
            )
              return <Ionicons name={iconName} size={size} color={color} />;
            else if (
              iconName === "account-key" ||
              iconName === "account-key-outline"
            ) {
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else {
              return <AntDesign name={iconName} size={size} color={color} />;
            }
          }
          // return (
          //   <Image
          //     source={require("../../assets/home-logo.png")}
          //     style={{ width: size, height: size }}
          //   />
          // );
        },
        tabBarActiveTintColor: "#003f34",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { height: 60, paddingTop: 5 },
        tabBarLabelStyle: { padding: 5, fontSize: 15, paddingTop: 2 },
      })}
      // tabBarOption={{
      //   activeTintColor: "tomato",
      //   inactiveTintColor: "blue",
      //   labelStyle: { paddingBottom: 10, fontSize: 10 },
      //   style: { padding: 10, height: 70 },
      // }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          // tabBarLabel: "Home",
          // tabBarIcon: ({ focused, color, size }) => (
          //   <Image
          //     source={
          //       focused
          //         ? require("../../assets/home-logo.png")
          //         : require("../../assets/home-logo.png")
          //     }
          //     style={{
          //       width: size,
          //       height: size,
          //     }}
          //   />
          // ),
        }}
        name="Home"
        component={Dashboard}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Chat"
        component={CameraFeature}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Sell"
        component={CreateAd}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Image"
        component={ImagePickerExample}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Account"
        component={AuthStack}
      />
    </Tab.Navigator>
  );
}

// const Drawer = createDrawerNavigator();
// console.log("check",Drawer);

// function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="dashboard">
//       <Drawer.Screen name="loginoption" component={Loginoption} />
//       <Drawer.Screen name="signup" component={Signup} />
//       <Drawer.Screen name="login" component={Login} />
//       <Drawer.Screen name="dashboard" component={Dashboard} />
//     </Drawer.Navigator>
//   );
// }
