import {UserSchema} from '@/features/home/domains/user'

import type {z} from 'zod'

const UserData = UserSchema.nullish()

const UsersData = UserData.array().nullish()

export type UserData = z.infer<typeof UserData>

export type UsersData = z.infer<typeof UsersData>
