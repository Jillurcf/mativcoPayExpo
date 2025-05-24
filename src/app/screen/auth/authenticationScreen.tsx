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
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const StripeAuthScreen = () => {
    const [redirectUri, setRedirectUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showWebView, setShowWebView] = useState(false);

    const handleAuthenticate = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://10.0.80.13:8084/api/stripe/auth-url');
            const data = await res.json();
            console.log(data, 'Fetched Stripe URL');
            setRedirectUri(data.auth_url);
            setShowWebView(true);
        } catch (err) {
            console.error('Failed to fetch redirect URI:', err);
        } finally {
            setLoading(false);
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
                    console.log('Navigated to:', navState.url);
                    if (navState.url.includes('/api/stripe/callback')) {
                        const urlParams = new URLSearchParams(navState.url.split('?')[1]);
                        const code = urlParams.get('code');
                        console.log('Stripe returned code:', code);
                        // Send code to backend here
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
               
                    <View style={tw` items-center my-6`}>
                      <TButton
                      onPress={handleAuthenticate}
                      containerStyle={tw`w-[100%] bg-black`} title='Get Authenticate'/>

                    </View>
             
            </View>
            <StatusBar translucent={false} />
        </View>
    );
};

export default StripeAuthScreen;

