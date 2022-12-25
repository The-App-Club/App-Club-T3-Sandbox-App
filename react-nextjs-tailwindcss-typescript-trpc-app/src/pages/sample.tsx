import {type NextPage} from 'next'
import AuthLayout from '@/layouts/AuthLayout'
import Sample from '@/components/Sample'
import {trpc} from '@/utils/trpc'

const SamplePage: NextPage = () => {
  const hello = trpc.example.hello.useQuery({text: 'from tRPC'})
  console.log(hello)
  return (
    <AuthLayout>
      <Sample />
    </AuthLayout>
  )
}

export default SamplePage
