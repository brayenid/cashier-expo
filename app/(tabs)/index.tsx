import Container from '@/components/Container'
import Search from '@/components/Pos/Search'
import { dummyCategories, dummyData } from '@/lib/Dummy'
import { cn, currencyFormat } from '@/lib/Helper'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { FlatList, Image, ImageSourcePropType, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

function Viewer({
  title,
  value,
  img
}: {
  title: string
  value: number
  className?: string
  img: ImageSourcePropType
  productGetter?: any
  productSetter?: any
}) {
  const [qty, setQty] = useState(0)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#eee',
        padding: 12
      }}>
      <View className="w-full overflow-hidden">
        <Image
          source={img}
          style={{
            height: 120, // atau sesuai kebutuhan
            width: 'auto',
            borderRadius: 8
          }}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            textAlign: 'center',
            padding: 8,
            fontWeight: 'bold'
          }}>
          {title}
        </Text>

        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 24, color: 'salmon' }}>
          {currencyFormat(value)}
        </Text>
      </View>
      {qty < 1 ? (
        <View>
          <Pressable
            style={{
              padding: 8,
              backgroundColor: 'salmon',
              borderRadius: 8
            }}
            onPress={() => setQty(qty + 1)}>
            <Text style={{ textAlign: 'center' }}>Tambah</Text>
          </Pressable>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row'
          }}>
          <Pressable onPress={() => (qty > 0 ? setQty(qty - 1) : setQty(0))} style={style.pressable}>
            <View>
              <Ionicons name="remove" size={18} />
            </View>
          </Pressable>
          <TextInput
            value={`${qty}`}
            style={{
              flex: 1,
              textAlign: 'center'
            }}
          />
          <Pressable onPress={() => setQty(qty + 1)} style={style.pressable}>
            <View>
              <Ionicons name="add" size={18} />
            </View>
          </Pressable>
        </View>
      )}
    </View>
  )
}

interface ProductToCo {
  id?: string
  quantity?: number
}

export default function Index() {
  const [productToCo, setProductToCo] = useState<ProductToCo>({})

  return (
    <Container>
      <View style={{ padding: 16 }}>
        <Text className="text-2xl font-bold mb-4">Penjualan</Text>
        <View className="">
          <Search />
        </View>
      </View>
      <View>
        {dummyData.length ? (
          <FlatList
            data={dummyData}
            renderItem={({ item }) => <Viewer title={item.title} value={item.price} img={item.img} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{
              paddingHorizontal: 16,
              gap: 16
            }}
            columnWrapperStyle={{
              gap: 16
            }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View className="" style={{ paddingHorizontal: 16 }}>
            <Text className="border border-gray-200 bg-red-50 p-6 text-center rounded-xl mb-4">Tidak ada data</Text>
          </View>
        )}
      </View>
    </Container>
  )
}

const style = StyleSheet.create({
  pressable: {
    backgroundColor: 'salmon',
    padding: 8,
    borderRadius: 8
  }
})
