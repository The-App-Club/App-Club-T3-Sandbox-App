import {type NextPage} from 'next'
import Fallback from '@/features/fallback/components/Fallback'
import AuthLayout from '@/layouts/AuthLayout'

const FallbackPage: NextPage = () => {
  return (
    <AuthLayout>
      <Fallback />
    </AuthLayout>
  )
}

export default FallbackPage
