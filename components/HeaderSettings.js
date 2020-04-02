import React from 'react'
import CustomText from '../components/CustomText'

import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'

const HeaderSettings = props => {
  const editPost = () => {
    console.log('Edit')
  }

  const deletePost = () => {
    console.log('Delete')
  }

  return (
    <Menu>
      <MenuTrigger><Ionicons size={30} name='md-more' style={styles.headerIcon} /></MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={editPost} >
          <CustomText style={styles.menuOption} >Editar</CustomText>
        </MenuOption>
        <MenuOption onSelect={deletePost} >
          <CustomText style={styles.menuOptionDelete} >Eliminar</CustomText>
        </MenuOption>
      </MenuOptions>
    </Menu>
  )
}

const styles = StyleSheet.create({
  headerIcon: {
    color: 'white',
    marginHorizontal: 15
  },
  menuOption: {
    fontSize:16, 
    marginLeft:5,
    marginVertical:10
  },
  menuOptionDelete: {
    fontSize:16, 
    marginLeft:5,
    color: 'red',
    marginVertical:10
  }
})

export default HeaderSettings