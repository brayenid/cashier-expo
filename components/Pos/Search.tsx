import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Search = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#ddd'
      }}>
      <View style={{ padding: 10 }}>
        <Ionicons name="search" size={22} color="#555" />
      </View>
      <TextInput
        placeholder="Cari produk"
        multiline={false}
        style={{
          flex: 1
        }}
      />
    </View>
  )
}

export default Search
