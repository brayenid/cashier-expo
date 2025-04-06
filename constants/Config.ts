export const config = {
  db: {
    url: process.env.EXPO_PUBLIC_TURSO_DATABASE_URL ?? '',
    token: process.env.EXPO_PUBLIC_TURSO_AUTH_TOKEN ?? ''
  }
}
