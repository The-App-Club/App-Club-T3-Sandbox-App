import {User} from '@/domains/user'
import {router, publicProcedure} from '@/server/trpc/trpc'

export const usersRouter = router({
  listUp: publicProcedure.query(({ctx, input}) => {
    // throw new Error("a");
    return [
      {
        id: '1',
        name: 'Spike',
        email: 'spike@bebop.cowboy',
      },
      {
        id: '2',
        name: 'Fei',
        email: 'fei@bebop.cowboy',
      },
    ]
  }),
})
