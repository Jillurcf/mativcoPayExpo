// import { IconBack, IconLogout, IconNotification, IconProfile, IconSettings } from '@/src/assets/icons/icons';
import { IconBack, IconDashboard, IconHelpAndContact, IconLogout, IconNotification, IconPrivacyPolicy } from '@/src/assets/icon/icon';
import tw from '@/src/lib/tailwind';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function DrawerLayout() {
  // const [logoutConfirmationModalVisible, setLogoutConfirmationModalVisible] =
  //   useState(false);
  // const handleLogout = () => {
  //   // Perform your logout logic here
  //   console.log('Logout pressed');
  //   setLogoutConfirmationModalVisible(false)
  //   router.replace('/screens/auth/login')
  //   lStorage.removeItem('token')
  //   CookieManager.clearAll()
  // };
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#FFFFFF',
          // marginTop: 40,
        },
        drawerLabelStyle: {
          color: '#5E5E5E',
          fontSize: 20,
          fontFamily: "RobotoBold",
          // marginTop: 20,
          paddingVertical: 0,
        },
        drawerItemStyle: {
          marginTop: 20,
        }
      }}
      drawerContent={(props) => (
        <View style={tw`flex-1 `}>
          {/* Scrollable Drawer Content */}
          <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={tw`flex-1`}>
              {/* 🔙 Back Icon at Top Right */}
              <View style={tw`flex-row justify-end px-4 `}>
                <TouchableOpacity
                  onPress={() => props.navigation.closeDrawer()}
                  style={tw`bg-[#262329] w-10 h-10 items-center justify-center rounded-full`}
                >
                  <SvgXml xml={IconBack} width={20} height={20} />
                </TouchableOpacity>
              </View>

              {/* 📋 Drawer Items */}
              <DrawerItemList {...props} />
            </View>
          </DrawerContentScrollView>

          {/* 🚪 Logout Button at Bottom Left */}
          <View style={tw`px-4 py-4`}>
            <TouchableOpacity
              style={tw`flex-row gap-4 px-4`} 
              // onPress={() => setLogoutConfirmationModalVisible(true)}
              >
              <SvgXml xml={IconLogout} />
              <Text style={tw`text-red-400 text-base font-RobotoRegular`}>Logout</Text>
            </TouchableOpacity>
          </View>
          {/* <NormalModal
            layerContainerStyle={tw`justify-end flex-1 animate-bounce`} // Ensure modal content aligns at the bottom
            containerStyle={tw`bg-[#FFFFFF33] rounded-t-2xl p-6`} // Styling the modal itself
            // visible={logoutConfirmationModalVisible}
            // setVisible={setLogoutConfirmationModalVisible}
          >
            <View>
              <Text style={tw`text-red-500 text-lg text-center font-AvenirLTProHeavy mb-2`}>
                Log out
              </Text>
              <Text style={tw`text-white text-lg text-center font-AvenirLTProHeavy mb-2`}>
                Sure you want to log out?
              </Text>

              <View style={tw`mt-2`}>
                <View style={tw` w-full`}>
                  <Button
                    title="Yes, Log Out"
                    style={tw`text-white font-AvenirLTProHeavy`}
                    containerStyle={tw`bg-black px-6`}
                    onPress={handleLogout}
                  />
                </View>
                <View style={tw` mt-2`}>
                  <Button
                    title="No"
                    style={tw`text-black px-6`}
                    containerStyle={tw`bg-[#EAF5F5]`}
                    onPress={()=> {
                      setLogoutConfirmationModalVisible(false)
                    }}
                  />
                </View>
              </View>
            </View>
          </NormalModal> */}
        </View>
      )}
    >
      <Drawer.Screen
        name="(tab)"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        options={{
          title: 'Dashboard',
          drawerIcon: () => <SvgXml xml={IconDashboard} />,
        }}
      />
      <Drawer.Screen
        name="Notification"
        options={{
          title: 'Notification',
          drawerIcon: () => <SvgXml xml={IconNotification} />,
        }}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        options={{
          title: 'Prvacy Policy',
        
          drawerIcon: () => <SvgXml xml={IconPrivacyPolicy} />,
        }}
      />
      <Drawer.Screen
        name="HelpAndContact"
        options={{
          title: 'Help & Contact',
          drawerIcon: () => <SvgXml xml={IconHelpAndContact} />,
        }}
      />
      
    </Drawer>
  );
}
