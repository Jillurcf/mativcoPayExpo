import { IconDrawer } from '@/src/assets/icon/icon';
import DashboardCard from '@/src/components/DashboardCard';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from 'twrnc';
// adjust the path if needed

const data = [
    {
        id: '1',
        iconName: 'people',
        iconColor: '#00BFFF',
        label: 'Total Merchant',
        value: '1,248',
        percent: '12%',
    },
    {
        id: '2',
        iconName: 'storefront',
        iconColor: '#8A2BE2',
        label: 'Active Merchants',
        value: '984',
        percent: '8%',
    },
    {
        id: '3',
        iconName: 'swap-horizontal',
        iconColor: '#FF8C00',
        label: 'Total Transactions',
        value: '8,742',
        percent: '22%',
    },
    {
        id: '4',
        iconName: 'cash',
        iconColor: '#00C49F',
        label: 'Platform Fees',
        value: '$1,049.04',
        percent: '22%',
    },
    {
        id: '5',
        iconName: 'trending-up',
        iconColor: '#FF69B4',
        label: 'Total Revenue',
        value: '$24,876.50',
        percent: '18%',
    },
];

const DashboardScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`flex-1 bg-gray-100 p-3`}>
            <View style={tw`flex-row items-center justify-between mt-8`}>
                <TouchableOpacity
                    onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}
                    style={tw``}>
                    <SvgXml color={"white"} xml={IconDrawer} />

                </TouchableOpacity>
                <Text style={tw`text-black text-[30px] font-RobotoBold`}>Dashboard</Text>
                <View></View>
            </View>
            <View style={tw`mt-12`}>
                <FlatList
                    data={data}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <DashboardCard {...item} />}
                    contentContainerStyle={tw`pb-4`}
                />
            </View>
        </View>
    );
};

export default DashboardScreen;
