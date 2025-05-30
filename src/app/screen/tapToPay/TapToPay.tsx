// import at top
import { IconBack, IconTapToPay } from '@/src/assets/icon/icon';
import InputText from '@/src/components/InputText';
import TButton from '@/src/components/TButton';
import tw from '@/src/lib/tailwind';
import { useStripe } from '@stripe/stripe-react-native';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';
import { SvgXml } from 'react-native-svg';



type Props = {}

const tapTopay = (props: Props) => {
    // const [value, setValue] = useState(0)
    const isScanning = useRef(false);
    const { id } = useLocalSearchParams();
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    console.log(typeof id, "type++++++++++++++++++++")

    // useEffect(() => {
    //     async function setupGooglePay() {
    //         const isSupported = await isGooglePaySupported();
    //         if (!isSupported) {
    //             Alert.alert('Google Pay not supported');
    //             return;
    //         }

    //         const { error } = await initGooglePay({
    //             testEnv: true,
    //             merchantName: 'Your Merchant Name',
    //             countryCode: 'US',
    //             currencyCode: 'USD',
    //         });

    //         if (error) {
    //             console.log('initGooglePay error:', error);
    //         }
    //     }

    //     setupGooglePay();
    // }, []);

    useEffect(() => {
        NfcManager.start();
        return () => {
            NfcManager.cancelTechnologyRequest().catch(() => null);
        };
    }, []);

    const readNfc = async () => {
        if (isScanning.current) {
            console.warn('Already scanning...');
            return;
        }

        isScanning.current = true;

        try {
            await NfcManager.cancelTechnologyRequest().catch(() => null); // Clean stale session

            await NfcManager.requestTechnology(NfcTech.Ndef);
            const tag = await NfcManager.getTag();
            console.log('Tag found:', tag);
            Alert.alert("payment succes");

            // 🚀 1. Create PaymentIntent for Stripe Connect
            // const connectedAccountId = 'acct_XXXX'; 
            // const amountInCents = Math.round(Number(value) * 100);
            // const clientSecret = await createPaymentIntent(amountInCents, connectedAccountId);
            const formData = new FormData();
            formData.append('amount', "50"); // Note: FormData values must be strings or Blobs
            formData.append('currency', 'eur');
            formData.append('account', id);

            const response = await fetch('http://10.0.80.13:8084/api/stripe/create_intent', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result, "result++++++++++++++++++++++++++++")
            const paymentIntent = result?.data?.client_secret;
            setClientSecret(paymentIntent);
            console.log(paymentIntent, 'clientSecret');

            // 🚀 2. Init Payment Sheet with Google Pay
            const { error: initError } = await initPaymentSheet({
                merchantDisplayName: 'Your Merchant Name',
                paymentIntentClientSecret: paymentIntent,
                googlePay: {
                    merchantCountryCode: 'US',
                    currencyCode: 'USD',
                    testEnv: true,
                },
            });

            if (initError) {
                console.log('Init error:', initError);
                Alert.alert('Error', 'Failed to initialize payment sheet');
                return;
            }

            // 🚀 3. Present Payment Sheet
            const { error: paymentError } = await presentPaymentSheet();
            if (paymentError) {
                console.log('Payment failed:', paymentError);
                Alert.alert('Payment failed', paymentError.message);
            } else {
                Alert.alert('Success', 'Payment completed!');
            }

        } catch (ex) {
            console.warn('Oops! [Error]:', ex);
        } finally {
            await NfcManager.cancelTechnologyRequest().catch(() => null);
            isScanning.current = false;
        }
    };
    return (
        <View style={tw`flex-1 bg-white  p-[4%]`}>
            <View>
                <TouchableOpacity onPress={() => router.back()}>
                    <SvgXml xml={IconBack} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-col justify-between h-[90%]`}>
                <View>
                    <View style={tw`my-8`}>
                        <Text style={tw`text-center text-[25px] font-bold`}>Tap to pay</Text>
                    </View>
                    <View>
                        {/* <CustomNumericInput /> */}
                        <InputText
                            placeholder="Give amount"
                            containerStyle={tw`border`} />
                    </View>
                </View>
                <View style={tw`items-center`}>
                    <SvgXml xml={IconTapToPay} />
                </View>
                <View>
                    <TButton
                        onPress={readNfc}
                        // onPress={() => router.push('/screen/tapToPay/PaymentSuccessScreen')} 
                        containerStyle={tw`bg-black w-full`} title='Tab to pay' />
                </View>
            </View>
            <StatusBar translucent={false} />
        </View>
    )
}

export default tapTopay

const styles = StyleSheet.create({})