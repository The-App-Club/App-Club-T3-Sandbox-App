import {type NextPage} from 'next'
import AuthLayout from '@/layouts/AuthLayout'
import {FallbackNoMatch} from '@/components/fallback/FallbackNotMatch'
import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackNotFound} from '@/components/fallback/FallbackNotFound'
import {FallbackNotAuth} from '@/components/fallback/FallbackNotAuth'
import {FallbackDataEmpty} from '@/components/fallback/FallbackDataEmpty'

const FallbackPage: NextPage = () => {
  return (
    <AuthLayout>
      <FallbackDataEmpty iconSize={200} />
      <FallbackNotAuth iconSize={200} />
      <FallbackNotFound iconSize={200} />
      <FallbackNoMatch iconSize={200} />
      <FallbackError iconSize={200} />
    </AuthLayout>
  )
}

export default FallbackPage
