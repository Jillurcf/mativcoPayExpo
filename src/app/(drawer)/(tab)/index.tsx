// // import { DrawerActions, useNavigation } from '@react-navigation/native';
// // import React, { useState } from 'react';
// // import {
// //     Dimensions,
// //     FlatList,
// //     StatusBar,
// //     StyleSheet,
// //     Text,
// //     TouchableOpacity,
// //     View
// // } from 'react-native';
// // import { SvgXml } from 'react-native-svg';
// // // import { IconBusiness, IconDrawer, IconEconomy, IconFinance, IconLaw, IconMarketing, IconWriting } from '../../../assets/icons/icons';
// // import tw from '../../../lib/tailwind';


// //   type Props = {};

// //   const Discover = () => {
// //     const navigation = useNavigation();
// //     const [successModal, setSuccessModal] = useState(false);
// //     // const { data, isLoading, isError } = useGetAllCategoryQuery({});
// //     // console.log(data, "data++++++")
// //     const DiscoverData = [
// //       { id: '1', title: 'marketing', route: '', icon: IconMarketing, iconType: 'image' },
// //       { id: '2', title: 'finnance', route: '', icon: IconFinance, iconType: 'image' },
// //       { id: '3', title: 'law', route: '', icon: IconLaw, iconType: 'image' },
// //       { id: '4', title: 'economy', route: '', icon: IconEconomy, iconType: 'image' },
// //       { id: '5', title: 'writing', route: '', icon: IconWriting, iconType: 'image' },
// //       { id: '6', title: 'business', route: '', icon: IconBusiness, iconType: 'image' },
// //     ];
// //     const { width, height } = Dimensions.get('screen');
// //     const handlePress = (route: string, title: string, taskId: string, icon: string) => {
// //       console.log('route', route);
// //       console.log('taskId', taskId);
// //       console.log('title', title);
// //       if (taskId === '3') {
// //         setSuccessModal(true);
// //       } else {
// //         // router.push({
// //         //   pathname: "/screens/DiscoverResult",
// //         //   params : 
// //         //   { ttile: title,
// //         //     taskId: taskId,
// //         //     route: route
// //         //    }
// //         // });
// //       }
// //     };
// //     // const handleTransfer = () => {
// //     //   navigation.navigate('cashTransfer');
// //     // };


// //     return (
// //       <View style={tw`bg-black flex-1 px-[4%] mt-4`}>
// //         <View style={tw`flex-row justify-between my-4 items-center`}>
// //           <TouchableOpacity
// //             onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}>
// //             {/* <SvgXml width={30} xml={IconDrawer} /> */}
// //           </TouchableOpacity>
// //           <View>
// //             <Text style={tw`text-white font-AvenirLTProBlack text-right`}>
// //               Welcome Back
// //             </Text>
// //             <Text style={tw`text-white font-AvenirLTProBlack text-lg text-right`}>
// //               Sub Bou
// //             </Text>
// //           </View>
// //         </View>
// //         <Text
// //           style={tw`text-white font-AvenirLTProBlack text-center text-2xl my-6`}>
// //           Discover Contributers to {'\n'} Learn and Consult
// //         </Text>
// //         {/* <View style={tw`my-4`}>
// //           <InputText

// //             containerStyle={tw`bg-[#262329] border h-14 relative border-[#565358]`}
// //             labelStyle={tw`text-white font-AvenirLTProBlack mt-3`}
// //             placeholder={'Search & Learn'}
// //             placeholderColor={'#949494'}
// //             //   label={'Password'}
// //             iconLeft={IconGeneralSearch}
// //           // iconRight={isShowConfirmPassword ? iconLock : iconLock}
// //           //   onChangeText={(text: any) => setConfirmPassword(text)}
// //           //   isShowPassword={!isShowConfirmPassword}
// //           //   rightIconPress={() =>
// //           //     setIsShowConfirmPassword(!isShowConfirmPassword)
// //           //   }
// //           />
// //           <TouchableOpacity
// //             onPress={() => router.push("/screens/DiscoverResult")}
// //             style={tw`absolute right-4 top-4`}>
// //             <Text style={tw`text-white`}>Search</Text>
// //           </TouchableOpacity>
// //         </View> */}
// //         <View>
// //           <FlatList
// //             key={`flatlist-2`}
// //             data={DiscoverData}
// //             keyExtractor={item => item.id}
// //             numColumns={2}
// //             columnWrapperStyle={{ justifyContent: 'center' }}
// //             scrollEnabled={false} // Disable FlatList scrolling
// //             renderItem={({ item }) => {
// //               console.log(item, "")
// //               // const categoryImg = !item?.image
// //               //             ? { uri: `${imageUrl}/${item?.image}` }
// //               //             : require('../../../assets/images/logo.png'); // fallback image
// //               //   console.log(categoryImg, "categoryImg+++++++=")
// //               return (
// //                 (
// //                   <TouchableOpacity
// //                     // style={tw`md:w-28 md:h-28 sm:w-20 sm:h-20  rounded-lg m-2 h-24 bg-[#F4F1F1] justify-center items-center`}
// //                     style={{
// //                       width: width * 0.4,
// //                       height: height * 0.12,
// //                       margin: width * 0.02,
// //                       backgroundColor: '#262329',
// //                       borderRadius: width * 0.02,
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       justifyContent: 'center',
// //                     }}
// //                     onPress={() => handlePress(item.route, item.id, item.title, item.icon)}>
// //                     {/* {item.iconType === 'Image' ? ( */}
// //                     {/* <Image source={categoryImg} style={tw`w-6 h-6`}  width={10} height={10} /> */}
// //                     <SvgXml width={24} height={24} xml={item?.icon} />
// //                     {/* ) : item.iconType === 'MaterialCommunityIcons' ? (
// //             <MaterialCommunityIcons
// //               name={item.icon}
// //               size={20}
// //               color="#0C84C5"
// //             />
// //           ) : (
// //             <MaterialCommunityIcons
// //               name={item.icon}
// //               size={20}
// //               color="#0C84C5"
// //             />
// //           )}  */}
// //                     <Text
// //                       style={tw`text-start py-2 text-white font-AvenirLTProBlack`}>
// //                       {item?.title}
// //                     </Text>
// //                   </TouchableOpacity>
// //                 )
// //               )
// //             }

// //             }
// //           />
// //         </View>
// //         <StatusBar backgroundColor="black" translucent />
// //       </View>
// //     );
// //   };

// //   export default Discover;

// //   const styles = StyleSheet.create({});



import { IconDrawer } from '@/src/assets/icon/icon'
import TButton from '@/src/components/TButton'
import tw from '@/src/lib/tailwind'
// import { useNavigation, DrawerActions } from 'expo-router'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'


type Props = {}

const index = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-white p-[4%] `}>
      <View style={tw`flex-col  justify-between h-full`}>
        <View>
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}
              style={tw`mt-6`}>
              <SvgXml color={"white"} xml={IconDrawer} />

            </TouchableOpacity>
            <View style={tw` mt-24 items-center`}>
              <Image style={tw`w-[77px]  h-[103px]`} source={require('../../../assets/images/logo.png')} />
              <Text style={tw`text-black font-RoboBold font-bold py-6 text-3xl`}>Hi Jason 👋</Text>
            </View>
            <View style={tw``}>

            </View>
          </View>
          {/* <Text>index</Text> */}
          <View style={tw`mt-12 items-center justify-center bg-white`}>
            {/* Top Row */}
            <View style={tw`flex-row mb-4`}>
              {/* Card 1 */}
              <View style={tw`bg-white rounded-xl p-4 mr-2 w-40 shadow-lg`}>
                <Text style={tw`text-center text-gray-500 text-sm`}>Today's Payment Account</Text>
                <Text style={tw`text-center text-black text-2xl font-bold`}>$100</Text>
              </View>

              {/* Card 2 */}
              <View style={tw`bg-white rounded-xl p-4 ml-2 w-40 shadow-lg`}>
                <Text style={tw`text-center text-gray-500 text-sm`}>Last Payment Amount</Text>
                <Text style={tw`text-center text-black text-2xl font-bold`}>$50</Text>
              </View>
            </View>

            {/* Bottom Card */}
            <View style={tw`bg-white rounded-xl p-4 w-40 shadow-lg`}>
              <Text style={tw`text-center text-gray-500 text-sm`}>Total Payments{'\n'}This Month</Text>
              <Text style={tw`text-center text-black text-2xl font-bold`}>$15,000</Text>
            </View>
          </View>
        </View>
        <View>
          <TButton onPress={()=> router.push('/screen/tapToPay/TapToPay')} containerStyle={tw`bg-black w-full`} title='Tab to pay' />
        </View>
      </View>
      <StatusBar backgroundColor='black' translucent={false} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})

// import tw from '@/src/lib/tailwind'; // Adjust this if you're using nativewind or twrnc
// import React from 'react';
// import { Text, View } from 'react-native';

// const index = () => {
//   return (
//     <View style={tw`flex-1 items-center justify-center bg-white`}>
//       {/* Top Row */}
//       <View style={tw`flex-row mb-4`}>
//         {/* Card 1 */}
//         <View style={tw`bg-white border border-blue-500 rounded-xl p-4 mr-2 w-40 shadow-sm`}>
//           <Text style={tw`text-center text-gray-500 text-sm`}>Today's Payment Account</Text>
//           <Text style={tw`text-center text-black text-2xl font-bold`}>$100</Text>
//         </View>

//         {/* Card 2 */}
//         <View style={tw`bg-white rounded-xl p-4 ml-2 w-40 shadow-sm`}>
//           <Text style={tw`text-center text-gray-500 text-sm`}>Last Payment Amount</Text>
//           <Text style={tw`text-center text-black text-2xl font-bold`}>$50</Text>
//         </View>
//       </View>

//       {/* Bottom Card */}
//       <View style={tw`bg-white rounded-xl p-4 w-64 shadow-sm`}>
//         <Text style={tw`text-center text-gray-500 text-sm`}>Total Payments{'\n'}This Month</Text>
//         <Text style={tw`text-center text-black text-2xl font-bold`}>$15,000</Text>
//       </View>
//     </View>
//   );
// };

// export default index;
