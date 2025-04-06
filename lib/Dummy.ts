import { images } from '@/constants/Images'
import { ImageSourcePropType } from 'react-native'

interface Data {
  id: string
  title: string
  price: number
  img: ImageSourcePropType
}

interface Categories {
  title: string
}

export const dummyData: Data[] = [
  { title: 'Boba Red Stone', price: 20000, id: '1', img: images.dummy1 },
  { title: 'Thai Tea', price: 15000, id: '2', img: images.dummy2 },
  { title: 'Matcha', price: 20000, id: '3', img: images.dummy4 },
  { title: 'Green Tea', price: 20000, id: '4', img: images.dummy3 },
  { title: 'Green Tea', price: 20000, id: '5', img: images.dummy4 },
  { title: 'Green Tea', price: 20000, id: '6', img: images.dummy2 },
  { title: 'Green Tea', price: 20000, id: '7', img: images.dummy1 },
  { title: 'Green Tea', price: 20000, id: '8', img: images.dummy4 },
  { title: 'Green Tea', price: 20000, id: '9', img: images.dummy1 },
  { title: 'Green Tea', price: 20000, id: '10', img: images.dummy2 },
  { title: 'Green Tea', price: 20000, id: '11', img: images.dummy3 },
  { title: 'Green Tea', price: 20000, id: '12', img: images.dummy1 },
  { title: 'Green Tea', price: 20000, id: '13', img: images.dummy2 },
  { title: 'Green Tea', price: 20000, id: '14', img: images.dummy1 }
]

export const dummyCategories: Categories[] = [
  {
    title: 'Minuman'
  },
  {
    title: 'Makanan'
  },
  {
    title: 'Extra'
  }
]
