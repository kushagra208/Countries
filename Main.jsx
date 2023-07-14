import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import ChangePassword from './screens/ChangePassword';
import ResetPassword from './screens/ResetPassword';
import ForgetPassword from './screens/ForgotPassword';
import Camera from './screens/Camera';
import Register from './screens/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './redux/action';
import Loader from './components/Loader';
import Profile from './screens/Profile';
import Footer from './components/Footer';
import Verify from './screens/Verify';
import Details from './screens/Countries';
import Countries from './screens/Countries';
import Continent from './screens/Continent';
import Languages from './screens/Languages';

export default function App() {
  const { isAuthenticated, loading } = useSelector(state => state.auth);
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(loadUser());
    
  }, [dispatch]);
  return (
    loading ? <Loader /> : <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "home" : "login"}>
        <Stack.Screen name = "home" component={Home} options={{ headerShown: false}} />
        <Stack.Screen name = "login" component={Login} options={{ headerShown: false}} />
        <Stack.Screen name= "camera" component = {Camera} options={{ headerShown : false }} />
        <Stack.Screen name= "changePassword" component = {ChangePassword} options={{ headerShown : false }} />
        <Stack.Screen name= "forgetPassword" component = {ForgetPassword} options={{ headerShown : false }} />
        <Stack.Screen name= "resetPassword" component = {ResetPassword} options={{ headerShown : false }} />
        <Stack.Screen name = "register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name = "profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name = "verify" component={Verify} options={{ headerShown: false }} />
        <Stack.Screen name = "countries" component={Countries} options={{ headerShown: false }} />
        <Stack.Screen name = "continents" component={Continent} options={{ headerShown: false }} />
        <Stack.Screen name = "languages" component={Languages} options={{ headerShown: false }} />
      </Stack.Navigator>
    {isAuthenticated && <Footer /> }
      </NavigationContainer>
  );
}