import {exampleRouter} from '@/server/trpc/router/example'
import {usersRouter} from '@/server/trpc/router/users'
import {router} from '@/server/trpc/trpc'

export const appRouter = router({
  example: exampleRouter,
  users: usersRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
