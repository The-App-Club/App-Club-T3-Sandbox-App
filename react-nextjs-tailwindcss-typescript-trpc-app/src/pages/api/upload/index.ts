import {renameSync} from 'fs'

import multer from 'multer'

import type {NextApiRequest, NextApiResponse} from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const UPLOADED_DIR = `public/uploaded`

// https://stackoverflow.com/questions/36096805/uploading-multiple-files-with-multer-but-from-different-fields
const upload = multer({
  dest: UPLOADED_DIR,
})

// https://stackoverflow.com/a/62435110/15972569
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const doUploader = upload.fields([
    {name: 'example', maxCount: 1},
    {name: 'avator', maxCount: 1},
  ])

  doUploader(req as any, res as any, (err: any) => {
    if (err) {
      console.log(err)
      res.status(500).json({
        data: {
          message: 'something went wrong...',
        },
      })
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.files['avator'].forEach((file) => {
      // https://github.com/expressjs/multer/issues/1104#issuecomment-1152987772
      file.originalname = Buffer.from(file.originalname, 'latin1').toString(
        'utf8'
      )
      file.filename = file.originalname
      renameSync(file.path, `${UPLOADED_DIR}/${file.originalname}`)
    })
    const data = {
      ...req.body,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      avator: req.files['avator'][0],
    }
    console.log(data)

    res.status(200).json({
      data: {
        message: 'success',
      },
    })
  })
}
