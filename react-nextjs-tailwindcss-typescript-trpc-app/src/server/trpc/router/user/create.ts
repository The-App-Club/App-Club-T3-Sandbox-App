import {readFileSync, writeFileSync} from 'fs'
import {join} from 'path'

import {Chance} from 'chance'

import {UserSchema} from '@/features/user/domains/user'
import {publicProcedure} from '@/server/trpc/trpc'

import type {UserData} from '@/features/user/types'

const createUser = publicProcedure.input(UserSchema).mutation(({input}) => {
  if (
    process.env.NODE_ENV === 'development' &&
    Number(process.env.NEXT_PUBLIC_ENABLE_RANDOM_ERROR)
  ) {
    const isError = Chance().integer({min: 0, max: 1})
    if (isError) {
      throw new Error('Cowboy Bebop')
    }
  }
  const path = join(process.cwd(), 'public', 'data', 'users.json')
  const original = readFileSync(path, {
    encoding: 'utf-8',
  })
  const oldUsers: UserData[] = JSON.parse(original)
  oldUsers.push({
    id: input.name,
    name: input.name,
    email: input.email,
  })
  writeFileSync(path, JSON.stringify(oldUsers, null, 2), {
    flag: 'w',
  })
  return {
    ...input,
  }
})

export {createUser}
