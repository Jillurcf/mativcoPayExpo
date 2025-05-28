import { IconBack } from '@/src/assets/icon/icon';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const ReceiptHistoryScreen = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);

    return (
        <ScrollView className="p-4 bg-white flex-1">
            <TouchableOpacity onPress={() => router.back()}>
                <SvgXml xml={IconBack} />
            </TouchableOpacity>
            {/* Search */}
            <TextInput
                placeholder="Search by Transaction ID"
                className="border border-gray-300 p-3 rounded-xl mb-4"
                placeholderTextColor="#666"
            />

            {/* Date Range */}
            <Text className="text-gray-600 mb-1">Date Range</Text>
            <View className="flex-row justify-between mb-4">
                <TouchableOpacity
                    onPress={() => setShowStartPicker(true)}
                    className="flex-1 border border-gray-300 p-3 rounded-xl mr-2 flex-row justify-between"
                >
                    <Text>{startDate.toLocaleDateString()}</Text>
                    <MaterialIcons name="calendar-today" size={20} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setShowEndPicker(true)}
                    className="flex-1 border border-gray-300 p-3 rounded-xl ml-2 flex-row justify-between"
                >
                    <Text>{endDate.toLocaleDateString()}</Text>
                    <MaterialIcons name="calendar-today" size={20} />
                </TouchableOpacity>
            </View>

            {showStartPicker && (
                <DateTimePicker
                    value={startDate}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowStartPicker(false);
                        if (selectedDate) setStartDate(selectedDate);
                    }}
                />
            )}
            {showEndPicker && (
                <DateTimePicker
                    value={endDate}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowEndPicker(false);
                        if (selectedDate) setEndDate(selectedDate);
                    }}
                />
            )}

            {/* Status Dropdown (placeholder) */}
            <Text className="text-gray-600 mb-1">Status</Text>
            <TouchableOpacity className="border border-gray-300 p-3 rounded-xl flex-row justify-between mb-4">
                <Text>All Statuses</Text>
                <Ionicons name="chevron-down" size={20} />
            </TouchableOpacity>

            {/* Amount Range */}
            <Text className="text-gray-600 mb-1">Status</Text>
            <View className="flex-row justify-between mb-4">
                <TextInput
                    placeholder="Min"
                    className="flex-1 border border-gray-300 p-3 rounded-xl mr-2"
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Max"
                    className="flex-1 border border-gray-300 p-3 rounded-xl ml-2"
                    keyboardType="numeric"
                />
            </View>

            {/* Card */}
            <View className="bg-white rounded-2xl p-4 shadow-md flex-row justify-between items-center">
                <View>
                    <Text className="text-gray-500 mb-1">Date: January 12, 2025</Text>
                    <Text className="font-bold">Transaction ID: TX-T7XXJI</Text>
                </View>
                <View className="flex-row items-center">
                    <MaterialIcons name="check-box" size={28} color="green" style={{ marginRight: 8 }} />
                    <Ionicons name="chevron-forward" size={24} />
                </View>
            </View>
        </ScrollView>
    );
};

export default ReceiptHistoryScreen;
