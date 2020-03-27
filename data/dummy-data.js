import Post from '../models/post'
import Category from '../models/category'

export const DUMMYPOSTS = [
  new Post('1', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'image'),
  new Post('2', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'image'),
  new Post('3', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'image'),
  new Post('4', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'image'),
  new Post('5', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'image')
]

export const DUMMYCATEGORIES = [
  new Category('1', 'Productos'),
  new Category('2', 'Eventos'),
  new Category('3', 'Profesionales'),
  new Category('4', 'Turismo'),
  new Category('5', 'Municipalidades'),
  new Category('6', 'Bienes Raíces')
]
