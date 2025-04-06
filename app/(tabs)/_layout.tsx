import React, { useEffect, useState } from 'react'
import { config } from '@/constants/Config'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite'

function TabsScreen() {
  const { authState } = useAuth()
  const db = useSQLiteContext()
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await db.getAllAsync('SELECT * FROM users;')
        console.log('====================================')
        console.log(data)
        console.log('====================================')
        setUsers(data)
      } catch (error) {
        console.error('Gagal ambil data:', error)
      }
    }

    fetchData()
  }, [db])

  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'POS',
          tabBarIcon: ({ color }) => <Ionicons name="cash" color={color} size={18} />
        }}
      />
      <Tabs.Screen
        name="masterdata"
        options={{
          title: 'Master Data',
          tabBarIcon: ({ color }) => <Ionicons name="document" color={color} size={18} />
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Ionicons name="grid" color={color} size={18} />
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Akun',
          tabBarIcon: ({ color }) => <Ionicons name="person" color={color} size={18} />
        }}
      />
    </Tabs>
  )
}

export default function RootLayout() {
  return (
    <SQLiteProvider
      databaseName="kitakasir-base"
      options={{
        libSQLOptions: {
          url: config.db.url,
          authToken: config.db.token
        }
      }}>
      <AuthProvider>
        <TabsScreen />
      </AuthProvider>
    </SQLiteProvider>
  )
}
