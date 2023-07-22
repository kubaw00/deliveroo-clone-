import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard title='Test1' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='Test2' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='Test3' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='Test4' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='Test5' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='Test6' imgUrl='https://links.papareact.com/gn7' />
      <CategoryCard title='Test7' imgUrl='https://links.papareact.com/gn7' />
    </ScrollView>
  );
};

export default Categories;
