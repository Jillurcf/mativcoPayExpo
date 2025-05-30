import { StripeProvider } from '@stripe/stripe-react-native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Provider } from 'react-redux';
// import store from '../redux/store';

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    RobotoBlack: require('../assets/font/Roboto/Roboto-Black.ttf'),
    RobotoBlackItalic: require('../assets/font/Roboto/Roboto-BlackItalic.ttf'),
    RobotoBold: require('../assets/font/Roboto/Roboto-Bold.ttf'),
    RobotoBoldItalic: require('../assets/font/Roboto/Roboto-BoldItalic.ttf'),
    RobotoItalic: require('../assets/font/Roboto/Roboto-Italic.ttf'),
    RobotoLight: require('../assets/font/Roboto/Roboto-Light.ttf'),
    RobotoMedium: require('../assets/font/Roboto/Roboto-Medium.ttf'),
    RobotoRegular: require('../assets/font/Roboto/Roboto-Regular.ttf'),
  });

  if (!loaded) {

    return null;
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        {/* <Provider store={store}> */}
        <StripeProvider publishableKey='pk_test_51RL3oNBCjhGuTf8Vd82Ky8Qbc9SrgaK6WC2wKwsvEus1QS79FxBpp6XS5kUXqOznjcZF81ySaDgh2I6LUtXeexTH00vBxmA1W8'
        //  merchantIdentifier=''
         >
          <Slot />
        </StripeProvider>

        {/* </Provider> */}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
