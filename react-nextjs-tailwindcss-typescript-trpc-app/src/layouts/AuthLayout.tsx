import Logo from '@/components/icon/Logo'
import {Button} from '@mui/joy'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <Logo />
        <Button>Login</Button>
      </header>
      {children}
    </>
  )
}

export default AuthLayout
