import {exampleRouter} from '@/server/trpc/router/example'
import {userRouter} from '@/server/trpc/router/user'
import {router} from '@/server/trpc/trpc'

export const appRouter = router({
  example: exampleRouter,
  user: userRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
