import React from 'react'
import CustomText from '../components/CustomText'

import { Ionicons } from '@expo/vector-icons'
import { DUMMYCATEGORIES } from '../data/dummy-data'
import { StyleSheet, View, FlatList, TouchableOpacity} from 'react-native'

const HorizontalCategories = props => {
  const renderCategory = categoryItem => {
    return (
      <TouchableOpacity>
        <View style={styles.categoryContainer}>
          <Ionicons size={35} color='grey' name={categoryItem.item.icon} />
          <CustomText style={styles.categoryText}>{categoryItem.item.name}</CustomText>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList 
      horizontal={true}
      data={DUMMYCATEGORIES} 
      style={styles.container}
      renderItem={renderCategory}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20
  },
  categoryContainer: {
    //backgroundColor: '#c0c0c0',
    borderColor: 'grey',
    borderWidth: 1,
    height: 80,
    width: 140,
    borderRadius: 7,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    //color: 'white',
    color: 'grey'
  }
})

export default HorizontalCategories