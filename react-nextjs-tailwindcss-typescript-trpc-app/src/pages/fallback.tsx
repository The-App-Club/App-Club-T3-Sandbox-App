import {type NextPage} from 'next'
import AuthLayout from '@/layouts/AuthLayout'
import {FallbackNoMatch} from '@/components/fallback/FallbackNotMatch'
import {FallbackError} from '@/components/fallback/FallbackError'
import {FallbackNotFound} from '@/components/fallback/FallbackNotFound'
import {FallbackNotAuth} from '@/components/fallback/FallbackNotAuth'
import {FallbackDataEmpty} from '@/components/fallback/FallbackDataEmpty'
import {FallbackWarning} from '@/components/fallback/FallbackWarning'

const FallbackPage: NextPage = () => {
  return (
    <AuthLayout>
      <FallbackDataEmpty iconSize={120} />
      <FallbackNotAuth iconSize={120} />
      <FallbackNotFound iconSize={120} />
      <FallbackNoMatch iconSize={120} />
      <FallbackError iconSize={120} />
      <FallbackWarning iconSize={120} />
    </AuthLayout>
  )
}

export default FallbackPage
