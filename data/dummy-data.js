import Post from '../models/post'
import Category from '../models/category'

export const DUMMYPOSTS = [
  new Post('1', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'https://www.incimages.com/uploaded_files/image/970x450/getty_855098134_353411.jpg'),
  new Post('2', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'https://insajderi.com/wp-content/uploads/2019/11/intro-1511295215.jpg'),
  new Post('3', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'https://cnnespanol2.files.wordpress.com/2019/05/190528082519-pizza-hut-pan-relaunch-exlarge-169.jpg?quality=100&strip=info'),
  new Post('4', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'https://previews.123rf.com/images/dusanzidar/dusanzidar1703/dusanzidar170300006/73297139-selection-of-healthy-food-on-white-background-.jpg'),
  new Post('5', 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', '1000', 'https://insajderi.com/wp-content/uploads/2019/11/intro-1511295215.jpg')
]

export const DUMMYCATEGORIES = [
  new Category('1', 'Productos'),
  new Category('2', 'Eventos'),
  new Category('3', 'Profesionales'),
  new Category('4', 'Turismo'),
  new Category('5', 'Municipalidades'),
  new Category('6', 'Bienes Raíces')
]
