import {type NextPage} from 'next'
import Form from '@/features/form/components/Form'
import AuthLayout from '@/layouts/AuthLayout'

const FormPage: NextPage = () => {
  return (
    <AuthLayout>
      <Form />
    </AuthLayout>
  )
}

export default FormPage
