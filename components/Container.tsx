import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native'

export default function Container({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <SafeAreaView style={StyleSheet.flatten([styles.container, style])}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    backgroundColor: '#fff'
  }
})
