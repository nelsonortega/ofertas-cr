import React from 'react'
import CustomMap from '../components/CustomMap'
import CustomText from '../components/CustomText'
import HeaderSettings from '../components/HeaderSettings'
import ImageCarousel from '../components/ImageCarousel'

import { DUMMYPOSTS } from '../data/dummy-data'
import { StyleSheet, ScrollView } from 'react-native'
import ContactButtons from '../components/ContactButtons'
import BusinessInformation from '../components/BusinessInformation'

const PostDetailScreen = props => {
  const postId = props.navigation.getParam('postId')

  const images = [
    DUMMYPOSTS[0].image,
    DUMMYPOSTS[0].image2,
    DUMMYPOSTS[0].image3
  ]

  return (
    <ScrollView>
      <ImageCarousel images={images} />
      <CustomText bold style={styles.title}>{DUMMYPOSTS[0].title} {postId}</CustomText>
      <CustomText style={styles.description}>{DUMMYPOSTS[0].description}</CustomText>
      <BusinessInformation />
      <CustomMap />
      <ContactButtons />
    </ScrollView>
  )
}

PostDetailScreen.navigationOptions = navData => {
  return {
    headerRight: () => <HeaderSettings />
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 15,
    fontSize: 20
  },
  description: {
    marginHorizontal: 15,
    fontSize: 15
  }
})

export default PostDetailScreen