import { IconBack, IconTapToPay } from '@/src/assets/icon/icon'
import CustomNumericInput from '@/src/components/NumericInput'
import TButton from '@/src/components/TButton'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { SvgXml } from 'react-native-svg'

type Props = {}

const tapTopay = (props: Props) => {
    const [value, setValue] = useState(0)
    return (
        <View style={tw`flex-1 bg-white p-[4%]`}>
            <TouchableOpacity onPress={() => router.back()}>
                <SvgXml xml={IconBack} />
            </TouchableOpacity>
            <View style={tw`flex-col justify-between h-[95%]`}>
                <View>
                    <View style={tw`my-8`}>
                        <Text style={tw`text-center text-[25px] font-bold`}>Tap to pay</Text>
                    </View>
                    <View>
                        <CustomNumericInput />
                    </View>
                </View>
                <View style={tw`items-center`}>
                    <SvgXml xml={IconTapToPay}/>
                </View>
                <View>
                    <TButton onPress={() => router.push('/screen/tapToPay/PaymentSuccessScreen')} containerStyle={tw`bg-black w-full`} title='Tab to pay' />
                </View>
            </View>
            <StatusBar translucent={false} />
        </View>
    )
}

export default tapTopay

const styles = StyleSheet.create({})