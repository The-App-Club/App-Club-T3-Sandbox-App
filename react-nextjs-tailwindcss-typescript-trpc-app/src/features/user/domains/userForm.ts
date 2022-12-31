import {z} from 'zod'

export const UserFormSchema = z.object({
  name: z.string().min(1, '必須入力です'),
  email: z
    .string()
    .min(1, '必須入力です')
    .email('メールアドレスの形式が不正です'),
  // age: z.number().nullish(), // allow optional
  // age: z.number().nullable(), // not allow optional
})

export type UserForm = z.infer<typeof UserFormSchema>
