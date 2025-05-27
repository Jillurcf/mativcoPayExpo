


import tw from '@/src/lib/tailwind';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Text, TouchableOpacity, View } from 'react-native';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        headerShown: false,
        drawerType: 'front',
       
        drawerStyle: tw`bg-white pt-12`,
        drawerLabelStyle: tw`text-white text-lg`,
      })}
      drawerContent={(props) => (
        <View style={tw`flex-1`}>
          <DrawerContentScrollView {...props} contentContainerStyle={tw`flex-grow`}>
            <View style={tw`px-4`}>
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>
          <View style={tw`px-4 py-4`}>
            <TouchableOpacity onPress={() => console.log('Logout')}>
              <Text style={tw`text-white text-base`}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    >
      <Drawer.Screen name="(tab)" options={{ drawerLabel: 'Home' }} />
      <Drawer.Screen name="settings" options={{ drawerLabel: 'Settings' }} />
    </Drawer>
  );
}
