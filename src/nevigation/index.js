import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginoption from "../screens/loginOption";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Dashboard from "../screens/dashboard";
const stack = createNativeStackNavigator();
export default function Navigate () {

        return(
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen name="loginoption" component={Loginoption}/>
                    <stack.Screen name="signup" component={Signup}/>
                    <stack.Screen name="login" component={Login}/>
                    <stack.Screen name="dashboard" component={Dashboard}/>
                </stack.Navigator>
            </NavigationContainer>
        )
}