import React from 'react'

import { useState } from 'react'
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native'

const deviceWidth = Dimensions.get('window').width

const ImageCarousel = props => {
  const [selectedImage, setSelectedImage] = useState(0)

  const handleImageChange = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width
    const contentOffset = event.nativeEvent.contentOffset.x

    const selectedIndex = Math.floor(contentOffset/viewSize)
    setSelectedImage(selectedIndex)
  }

  return (
    <View style={styles.carouselContainer}>
      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleImageChange}
      >
        {props.images.map(image => (
          <Image
            key={image}
            source={{uri: image}}
            style={styles.carouselItem}
          />
        ))}
      </ScrollView>
      <View style={styles.circleContainer}>
        {props.images.map((image, index) => (
          <View
            key={image}
            style={[
              styles.whiteCircle, 
              {backgroundColor: index === selectedImage ? 'white' : 'lightgrey'}
            ]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselItem: {
    height: 200,
    width: deviceWidth
  },
  circleContainer: {
    bottom: 15,
    height: 10,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  whiteCircle: {
    width: 10,
    margin: 5,
    height: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'grey'
  }
})

export default ImageCarousel