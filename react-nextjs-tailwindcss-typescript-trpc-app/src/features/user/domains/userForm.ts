import {z} from 'zod'

export const UserFormSchema = z.object({
  name: z.string().min(1, '必須入力です'),
  email: z
    .string()
    .min(1, '必須入力です')
    .email('メールアドレスの形式が不正です'),
  age: z
    .number()
    .nullish()
    .refine(
      (value: number | null | undefined) => {
        if (!value) {
          return false
        }
        return value > 0
      },
      (value: number | null | undefined) => {
        return {message: '年齢は1歳以上で入力してください'}
      }
    ), // allow optional
  // age: z.number().nullable(), // not allow optional
})

export type UserForm = z.infer<typeof UserFormSchema>
