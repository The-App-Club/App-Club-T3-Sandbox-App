import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('req.body => ', req.body)
  res.status(200).json({})
}

// https://stackoverflow.com/a/68591262/15972569
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb', // Set desired value here
    },
  },
}
