import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Loginoption from "../screens/loginOption";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Dashboard from "../screens/dashboard";
import CreateAd from "../screens/createAd";

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

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="dashboard">
      <Tab.Screen
        options={{ headerShown: false }}
        name="createad"
        component={CreateAd}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="loginoption"
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
