// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, View } from 'react-native';
// import { WebView } from 'react-native-webview';

// const StripeAuthScreen = () => {
//   const [redirectUri, setRedirectUri] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch redirect URI from backend API
//     fetch('http://10.0.80.13:8084/api/stripe/auth-url')
//       .then(res => res.json())
//       .then(data => {
//         setRedirectUri(data.auth_url);
//         console.log(data, "Fetched Stripe URL");
//       })
//       .catch(err => {
//         console.error('Failed to fetch redirect URI:', err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

//   if (!redirectUri) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <WebView
//       source={{ uri: redirectUri }}
//       style={{ flex: 1 }}
//       startInLoadingState
//       javaScriptEnabled
//       domStorageEnabled
//       onNavigationStateChange={(navState) => {
//         console.log('Navigated to:', navState.url);
//         if (navState.url.includes('/api/stripe/callback')) {
//           // You can extract code param if needed:
//           const urlParams = new URLSearchParams(navState.url.split('?')[1]);
//           const code = urlParams.get('code');
//           console.log('Stripe returned code:', code);
//           // You can now send the `code` to your backend to complete the connection
//         }
//       }}
//     />
//   );
// };

// export default StripeAuthScreen;
import TButton from '@/src/components/TButton';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const StripeAuthScreen = () => {
    const [redirectUri, setRedirectUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showWebView, setShowWebView] = useState(false);
    const [code, setCode] = useState<string>('');
console.log(code, "code+++++++=")
    const handleAuthenticate = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://10.0.80.13:8084/api/stripe/auth-url');

            const contentType = res.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                const data = await res.json();
                console.log('✅ Fetched Stripe URL:', data);
                setRedirectUri(data.auth_url);
                setShowWebView(true);
            } else {
                const errorText = await res.text();
                console.error('❌ Unexpected response:', errorText);
            }

        } catch (err) {
            console.error('❌ Failed to fetch redirect URI:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleExchangeCode = async (code: string) => {
        try {
            console.log('🔁 Sending code to backend:', code);
            const res = await fetch('http://10.0.80.13:8084/api/stripe/exchange-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code }),
            });

            const data = await res.json();
            console.log('🎉 Full backend response:', data);

            if (data?.token) {
                setCode(data.token);
                setShowWebView(false);
               router.replace('/(drawer)/(tab)');
            } else {
                console.error('❌ Token not found in response');
            }
        } catch (err) {
            console.error('❌ Error exchanging code:', err);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    if (showWebView && redirectUri) {
        return (
            <WebView
                source={{ uri: redirectUri }}
                style={{ flex: 1 }}
                startInLoadingState
                javaScriptEnabled
                domStorageEnabled
                onNavigationStateChange={(navState) => {
                    console.log('🌐 Navigated to:', navState.url);

                    if (navState.url.includes('/api/stripe/callback')) {
                        const queryString = navState.url.split('?')[1];
                        const urlParams = new URLSearchParams(queryString);
                        const returnedCode = urlParams.get('code');

                        if (returnedCode) {
                            console.log('✅ Stripe returned code:', returnedCode);
                            handleExchangeCode(returnedCode);
                        } else {
                            console.warn('⚠️ Code not found in callback URL');
                        }
                    }
                }}
            />
        );
    }


    return (
        <View style={tw`bg-white flex-1 items-center justify-center`}>

            <View>
                <Image source={require('../../../assets/images/logo.png')} />
                <Text style={tw`text-[38px] font-bold`}>Mativco Pay</Text>
            </View>
            <View>
                {code ? (
                    <View style={tw` items-center my-6`}>
                        <TButton
                            onPress={handleAuthenticate}
                            containerStyle={tw`w-[100%] bg-black`} title='Next' />

                    </View>

                ) :
                    (
                        <View style={tw` items-center my-6`}>
                            <TButton
                                onPress={handleAuthenticate}
                                containerStyle={tw`w-[100%] bg-black`} title='Get Authenticate' />

                        </View>

                    )}
                {/* <View style={tw` items-center my-6`}>
                    <TButton
                        onPress={handleAuthenticate}
                        containerStyle={tw`w-[100%] bg-black`} title='Get Authenticate' />

                </View> */}

            </View>
            <StatusBar translucent={false} />
        </View>
    );
};

export default StripeAuthScreen;

