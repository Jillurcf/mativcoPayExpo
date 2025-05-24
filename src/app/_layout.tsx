import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Provider } from 'react-redux';
// import store from '../redux/store';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <Provider store={store}> */}
        <Slot />
      {/* </Provider> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
