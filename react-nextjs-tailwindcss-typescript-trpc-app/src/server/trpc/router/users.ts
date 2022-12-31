import data from '@/data/users.json'
import {UserSchema} from '@/features/user/domains/user'
import {publicProcedure, router} from '@/server/trpc/trpc'
import {createId} from '@/utils/bebopUtil'

export const usersRouter = router({
  listUp: publicProcedure.query(({ctx, input}) => {
    return data
  }),
  byId: publicProcedure
    .input(UserSchema.pick({id: true}))
    .query(({ctx, input}) => {
      return data.find((item) => {
        return item.id === input.id
      })
    }),
  create: publicProcedure
    .input(UserSchema.omit({id: true}))
    .mutation(({input}) => {
      data.push({
        id: createId(),
        name: input.name,
        email: input.email,
      })
      return {
        ...input,
      }
    }),
})
