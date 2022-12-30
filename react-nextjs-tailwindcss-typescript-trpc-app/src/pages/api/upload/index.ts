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
    {name: 'file', maxCount: 1},
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

    console.log(req.file)

    res.status(200).json({
      data: {
        message: 'success',
      },
    })
  })

  // try {
  //   const body: any = await new Promise((resolve, reject) => {
  //     upload.fields([
  //       {name: 'example', maxCount: 1},
  //       {name: 'file', maxCount: 1},
  //     ])(req, res, (err: any) => {
  //       if (err) return reject(err)
  //       resolve({file: req.file, path: req.body.path})
  //     })
  //   })
  //   console.log(body.file)
  //   res.status(200).json({
  //     fileName: body.file.originalname,
  //   })
  // } catch (e) {
  //   res.status(500).send(e)
  // }
}
