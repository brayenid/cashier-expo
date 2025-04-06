import { config } from '@/constants/Config'
import { openRemote } from '@op-engineering/op-sqlite'

export const turso = openRemote({
  url: config.db.url,
  authToken: config.db.token
})
