import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInformationScreen from '../Screens/SignInformationScreen';
import SigninScreen from '../Screens/SigninScreen';
import UploadPicScreen from '../Screens/UploadPicScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import OTPScreen from '../Screens/OTPScreen';
import BottomTabDashboard from './BottomTabDashboard';

import EditProfileScreen from '../Screens/EditProfileScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import GateInScreen from '../Screens/GateInScreen';
import RequestsScreen from '../Screens/RequestsScreen';
import AddInfoScreen from '../Screens/AddInfoScreen';
import AcceptRequestScreen from '../Screens/AcceptRequestScreen';
import GateOutScreen from '../Screens/GateOutScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Signin">
      <Stack.Screen name="Information" component={SignInformationScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="UploadPic" component={UploadPicScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="GateIn" component={GateInScreen} />
      <Stack.Screen name="BottomTabDashboard" component={BottomTabDashboard} />
      <Stack.Screen name="Requests" component={RequestsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="AddInfo" component={AddInfoScreen} />
      <Stack.Screen name="AcceptRequest" component={AcceptRequestScreen} />
      <Stack.Screen name="GateOut" component={GateOutScreen} />
    </Stack.Navigator>
  );
}
