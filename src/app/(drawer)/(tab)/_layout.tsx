import { IconHome, IconHomeFocus, IconHomeProfile, IconHomeProfileFocus, IconHomeReceipts, IconHomeReceiptsFocus } from '@/src/assets/icon/icon';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // This disables default label, we're using custom one
        tabBarStyle: {
          backgroundColor: '#141316',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconWrapper}>
              <SvgXml xml={focused ? IconHomeFocus : IconHome} width={20} height={20} fill={color} />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'font-RoboBold',
                  color: focused ? '#5E5E5E' : 'white',
                  marginTop: 4,
                  textAlign: 'center',
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="receipts"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconWrapper}>
             <SvgXml xml={focused ? IconHomeReceiptsFocus : IconHomeReceipts} width={20} height={20} fill={color} />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'font-RoboBold',
                  color: focused ? '#5E5E5E' : 'white',
                  marginTop: 4,
                  textAlign: 'center',
                }}
              >
                Receipts
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconWrapper}>
             <SvgXml xml={focused ? IconHomeProfileFocus : IconHomeProfile} width={20} height={20} fill={color} />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'font-RoboBold',
                  color: focused ? '#5E5E5E' : 'white',
                  marginTop: 4,
                  textAlign: 'center',
                }}
              >
               Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({
  iconWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
});
