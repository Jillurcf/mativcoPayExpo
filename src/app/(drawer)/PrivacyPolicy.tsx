import tw from '@/src/lib/tailwind'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const PrivacyPolicy = (props: Props) => {
  return (
    <View style={tw`bg-white p-8 flex-1`}>
      <Text style={tw`text-black`}>TermsAndCondition</Text>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({})