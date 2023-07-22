import { View, Text, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, SearchIcon } from 'react-native-heroicons/solid';
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>
      <View className='flex-row px-4 my-4 items-center space-x-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 bg-gray-200 p-3 space-x-2'>
          <MagnifyingGlassIcon color='#00CCBB' />
          <TextInput
            className='flex-1'
            placeholder='Restaurants and cousines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color='#00CCBB' />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
