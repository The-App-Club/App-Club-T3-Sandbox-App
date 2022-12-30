import {type NextPage} from 'next'
import Home from '@/features/home/components/Home'
import AuthLayout from '@/layouts/AuthLayout'

const HomePage: NextPage = () => {
  return (
    <AuthLayout>
      <Home />
    </AuthLayout>
  )
}

export default HomePage
