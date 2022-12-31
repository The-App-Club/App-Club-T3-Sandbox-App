import {Chance} from 'chance'

import {UserSchema} from '@/features/user/domains/user'
import {axios} from '@/libs/axios'
import {publicProcedure} from '@/server/trpc/trpc'

import type {UserData} from '@/features/user/types'
import type {BackendResponse} from '@/types/response'

const byId = publicProcedure
  .input(UserSchema.pick({id: true}))
  .query(async ({ctx, input}) => {
    if (
      process.env.NODE_ENV === 'development' &&
      Number(process.env.NEXT_PUBLIC_ENABLE_RANDOM_ERROR)
    ) {
      const isError = Chance().integer({min: 0, max: 1})
      if (isError) {
        throw new Error('Cowboy Bebop')
      }
    }
    if (process.env.NODE_ENV === 'development') {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/data/users.json`
      )
      if (response.status === 200) {
        const items: UserData[] = await response.json()
        return items.find((item) => {
          return item?.id === input.id
        })
      } else {
        const item: BackendResponse = await response.json()
        throw new Error(item.message)
      }
    } else {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/users`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 200) {
        const items: UserData[] = response.data
        return items.find((item) => {
          return item?.id === input.id
        })
      } else {
        const item: BackendResponse = await response.data
        throw new Error(item.message)
      }
    }
  })

export {byId}
