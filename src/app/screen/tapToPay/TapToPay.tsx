// // import at top
// import { IconBack, IconTapToPay } from '@/src/assets/icon/icon';
// import InputText from '@/src/components/InputText';
// import TButton from '@/src/components/TButton';
// import tw from '@/src/lib/tailwind';
// import { useStripe } from '@stripe/stripe-react-native';
// import { StripeTerminal } from '@stripe/stripe-terminal-react-native';
// import { router, useLocalSearchParams } from 'expo-router';
// import React, { useEffect, useRef, useState } from 'react';
// import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import NfcManager, { NfcTech } from 'react-native-nfc-manager';
// import { SvgXml } from 'react-native-svg';


// type Props = {}

// const tapTopay = (props: Props) => {
//     // const [value, setValue] = useState(0)
//     const isScanning = useRef(false);
//     const { id } = useLocalSearchParams();
//     const { initPaymentSheet, presentPaymentSheet } = useStripe();
//     const [clientSecret, setClientSecret] = useState<string | null>(null);
//     console.log(typeof id, "type++++++++++++++++++++")

//     // useEffect(() => {
//     //     async function setupGooglePay() {
//     //         const isSupported = await isGooglePaySupported();
//     //         if (!isSupported) {
//     //             Alert.alert('Google Pay not supported');
//     //             return;
//     //         }

//     //         const { error } = await initGooglePay({
//     //             testEnv: true,
//     //             merchantName: 'Your Merchant Name',
//     //             countryCode: 'US',
//     //             currencyCode: 'USD',
//     //         });

//     //         if (error) {
//     //             console.log('initGooglePay error:', error);
//     //         }
//     //     }

//     //     setupGooglePay();
//     // }, []);

//     useEffect(() => {
//         const initializeTerminal = async () => {
//             await StripeTerminal.initialize();
//         };

//         initializeTerminal();
//     }, []);


//     useEffect(() => {
//         NfcManager.start();
//         return () => {
//             NfcManager.cancelTechnologyRequest().catch(() => null);
//         };
//     }, []);

//     const readNfc = async () => {
//         if (isScanning.current) {
//             console.warn('Already scanning...');
//             return;
//         }

//         isScanning.current = true;

//         try {
//             await NfcManager.cancelTechnologyRequest().catch(() => null); // Clean stale session

//             await NfcManager.requestTechnology(NfcTech.Ndef);
//             const tag = await NfcManager.getTag();
//             console.log('Tag found:', tag);
//             Alert.alert("payment succes");

//             // 🚀 1. Create PaymentIntent for Stripe Connect
//             // const connectedAccountId = 'acct_XXXX'; 
//             // const amountInCents = Math.round(Number(value) * 100);
//             // const clientSecret = await createPaymentIntent(amountInCents, connectedAccountId);
//             const formData = new FormData();
//             formData.append('amount', "50"); // Note: FormData values must be strings or Blobs
//             formData.append('currency', 'eur');
//             formData.append('account', id);

//             const response = await fetch('http://10.0.80.13:8084/api/stripe/create_intent', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();
//             console.log(result, "result++++++++++++++++++++++++++++")
//             const paymentIntent = result?.data?.client_secret;
//             setClientSecret(paymentIntent);
//             console.log(paymentIntent, 'clientSecret');

//             // 🚀 2. Init Payment Sheet with Google Pay
//             const { error: initError } = await initPaymentSheet({
//                 merchantDisplayName: 'Your Merchant Name',
//                 paymentIntentClientSecret: paymentIntent,
//                 googlePay: {
//                     merchantCountryCode: 'US',
//                     currencyCode: 'USD',
//                     testEnv: true,
//                 },
//             });

//             if (initError) {
//                 console.log('Init error:', initError);
//                 Alert.alert('Error', 'Failed to initialize payment sheet');
//                 return;
//             }

//             // 🚀 3. Present Payment Sheet
//             const { error: paymentError } = await presentPaymentSheet();
//             if (paymentError) {
//                 console.log('Payment failed:', paymentError);
//                 Alert.alert('Payment failed', paymentError.message);
//             } else {
//                 Alert.alert('Success', 'Payment completed!');
//             }

//         } catch (ex) {
//             console.warn('Oops! [Error]:', ex);
//         } finally {
//             await NfcManager.cancelTechnologyRequest().catch(() => null);
//             isScanning.current = false;
//         }
//     };

    
//     return (
//         <View style={tw`flex-1 bg-white  p-[4%]`}>
//             <View>
//                 <TouchableOpacity onPress={() => router.back()}>
//                     <SvgXml xml={IconBack} />
//                 </TouchableOpacity>
//             </View>
//             <View style={tw`flex-col justify-between h-[90%]`}>
//                 <View>
//                     <View style={tw`my-8`}>
//                         <Text style={tw`text-center text-[25px] font-bold`}>Tap to pay</Text>
//                     </View>
//                     <View>
//                         {/* <CustomNumericInput /> */}
//                         <InputText
//                             placeholder="Give amount"
//                             containerStyle={tw`border`} />
//                     </View>
//                 </View>
//                 <View style={tw`items-center`}>
//                     <SvgXml xml={IconTapToPay} />
//                 </View>
//                 <View>
//                     <TButton
//                         onPress={readNfc}
//                         // onPress={() => router.push('/screen/tapToPay/PaymentSuccessScreen')} 
//                         containerStyle={tw`bg-black w-full`} title='Tab to pay' />
//                 </View>
//             </View>
//             <StatusBar translucent={false} />
//         </View>
//     )
// }

// export default tapTopay

// const styles = StyleSheet.create({})


// import at top
import { IconBack, IconTapToPay } from '@/src/assets/icon/icon';
import InputText from '@/src/components/InputText';
import TButton from '@/src/components/TButton';
import tw from '@/src/lib/tailwind';
import { useStripe } from '@stripe/stripe-react-native';
import { StripeTerminal } from '@stripe/stripe-terminal-react-native';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';
import { SvgXml } from 'react-native-svg';

type Props = {}

const TapToPay = (props: Props) => {
    const isScanning = useRef(false);
    const { id } = useLocalSearchParams();
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [amount, setAmount] = useState('');
    const [readerConnected, setReaderConnected] = useState(false);

    useEffect(() => {
        const initialize = async () => {
            try {
                await StripeTerminal.initialize();
                console.log('Terminal initialized');
                await discoverReaders();
            } catch (err) {
                console.error('Terminal init error+++++++++++++++++:', err);
            }
        };

        initialize();
    }, []);

    useEffect(() => {
        NfcManager.start();
        return () => {
            NfcManager.cancelTechnologyRequest().catch(() => null);
        };
    }, []);

    const discoverReaders = async () => {
        const { readers, error } = await StripeTerminal.discoverReaders({
            discoveryMethod: 'bluetoothScan',
            simulated: false,
        });

        if (error) {
            Alert.alert('Error discovering readers:', error.message);
            return;
        }

        if (readers.length > 0) {
            const { reader, error: connectError } = await StripeTerminal.connectReader(readers[0]);
            if (connectError) {
                Alert.alert('Error connecting to reader', connectError.message);
            } else {
                console.log('Connected to reader:', reader.label);
                setReaderConnected(true);
            }
        } else {
            Alert.alert('No readers found');
        }
    };

    const createPaymentIntent = async (amountValue: string) => {
        const formData = new FormData();
        formData.append('amount', amountValue);
        formData.append('currency', 'eur');
        formData.append('account', id);

        const response = await fetch('http://10.0.80.13:8084/api/stripe/create_intent', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        return result?.data?.client_secret;
    };

    const collectAndProcessPayment = async () => {
        if (!readerConnected) {
            Alert.alert('Reader not connected');
            return;
        }

        if (!amount || isNaN(Number(amount))) {
            Alert.alert('Enter a valid amount');
            return;
        }

        try {
            const clientSecret = await createPaymentIntent(amount);
            if (!clientSecret) {
                Alert.alert('Failed to create payment intent');
                return;
            }

            const { paymentIntent, error: collectError } = await StripeTerminal.collectPaymentMethod(clientSecret);
            if (collectError) {
                Alert.alert('Collection error', collectError.message);
                return;
            }

            const { paymentIntent: processedIntent, error: processError } = await StripeTerminal.processPayment(paymentIntent.id);
            if (processError) {
                Alert.alert('Payment error', processError.message);
            } else {
                Alert.alert('Success', 'Payment completed');
            }
        } catch (err) {
            console.error('Payment error:', err);
            Alert.alert('Error', 'Something went wrong');
        }
    };

    const handleNfcRead = async () => {
        if (isScanning.current) return;
        isScanning.current = true;

        try {
            await NfcManager.cancelTechnologyRequest().catch(() => null);
            await NfcManager.requestTechnology(NfcTech.Ndef);
            const tag = await NfcManager.getTag();
            console.log('NFC Tag:', tag);
            await collectAndProcessPayment();
        } catch (err) {
            console.warn('NFC error:', err);
        } finally {
            await NfcManager.cancelTechnologyRequest().catch(() => null);
            isScanning.current = false;
        }
    };

    return (
        <View style={tw`flex-1 bg-white p-[4%]`}>
            <View>
                <TouchableOpacity onPress={() => router.back()}>
                    <SvgXml xml={IconBack} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-col justify-between h-[90%]`}>
                <View>
                    <Text style={tw`text-center text-[25px] font-bold my-8`}>Tap to pay</Text>
                    <InputText
                        placeholder="Enter amount"
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                        containerStyle={tw`border`}
                    />
                </View>

                <View style={tw`items-center`}>
                    <SvgXml xml={IconTapToPay} />
                </View>

                <TButton
                    onPress={handleNfcRead}
                    containerStyle={tw`bg-black w-full`}
                    title="Tap to Pay"
                />
            </View>
            <StatusBar translucent={false} />
        </View>
    );
};

export default TapToPay;

const styles = StyleSheet.create({});
