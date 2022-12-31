import {z} from 'zod'

export const ExampleFormSchema = z.object({
  example: z.string().min(1, '必須入力です'),
  avator: z
    .custom<FileList>()
    .refine(
      (value: FileList) => {
        return value.length !== 0
      },
      (value: FileList) => {
        return {message: `必須入力です`}
      }
    )
    .refine(
      (value: FileList) => {
        return value.length === 1
      },
      (value: FileList) => {
        return {message: `アップできるファイルは単一ファイルのみです`}
      }
    )
    .refine(
      (value: FileList) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [file] = value
        if (file) {
          return file.size / Math.pow(1000, 2) > 2 ? false : true
        }
        return false
      },
      (value: FileList) => {
        return {message: `ファイル上限サイズは2MBになります。`}
      }
    )
    .refine(
      (value: FileList) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [file] = value
        if (file) {
          return ['image/jpg', 'image/png', 'image/jpeg'].includes(file.type)
        }
        return false
      },
      (value: FileList) => {
        return {message: `現在対応している拡張子はpng,jpeg,jpgになります。`}
      }
    ),
})

export type ExampleForm = z.infer<typeof ExampleFormSchema>
