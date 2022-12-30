import Logo from '@/components/icon/Logo'
import {Button} from '@mui/joy'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <header className="flex w-full items-center justify-between px-4 py-2 shadow-xl">
        <Logo width={60} height={60} />
        <Button>Login</Button>
      </header>
      {children}
    </>
  )
}

export default AuthLayout
