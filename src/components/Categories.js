import {View, Text, ActivityIndicator, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
const api = 'https://api.escuelajs.co/api/v1/categories';
import axios from 'axios';
import {FlatList} from 'react-native';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const getCategories = async () => {
    const {data} = await axios.get(api);
    data && setCategory(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <View className="py-3 ">
      {category.length > 0 ? (
        <FlatList
          data={category}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View className="mx-2">
              <Image src={item.image} className="w-20 h-20 rounded-2xl  " />
              <Text className="text-center text-md">{item.name}</Text>
            </View>
          )}
        />
      ) : (
        <ActivityIndicator size={'large'} color={'#E4C083'} />
      )}
    </View>
  );
};

export default Categories;
//  <ScrollView showsHorizontalScrollIndicator={false} horizontal>
//    {category.length > 0 ? (
//      category.map(item => (
//        <View key={item.id} className="mx-2">
//   <Image src={item.image} className="w-20 h-20 rounded-2xl  " />
//   <Text className="text-center text-md">{item.name}</Text>
// </View>
//      ))
//    ) : (
//      <ActivityIndicator size={'large'} color={'#E4C083'} />
//    )}
//  </ScrollView>;
