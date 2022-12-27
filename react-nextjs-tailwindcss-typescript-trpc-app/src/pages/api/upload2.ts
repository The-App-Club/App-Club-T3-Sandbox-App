import type {NextApiRequest, NextApiResponse} from 'next'
import formidable from 'formidable'
import {renameSync} from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

const UPLOADED_DIR = `public/uploaded`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new formidable.IncomingForm({
    uploadDir: UPLOADED_DIR,
    keepExtensions: true,
  })
  form.on('file', function (field, file) {
    // https://stackoverflow.com/a/8774566/15972569
    renameSync(file.filepath, `${UPLOADED_DIR}/${file.originalFilename}`)
  })
  form.on('progress', (bytesReceived: number, bytesExpected: number) => {
    console.log(`bytesReceived, bytesExpected`, bytesReceived, bytesExpected)
  })
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files)
  })
  res.status(200).json({
    data: {
      message: 'success',
    },
  })
}

// // https://stackoverflow.com/a/68591262/15972569
// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '4mb', // Set desired value here
//     },
//   },
// }
