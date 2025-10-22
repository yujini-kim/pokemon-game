import { AuthFooterLink, LoginForm, SocialLoginButton } from '@/features/auth'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/img/singIcon.webp" width={160} height={140} alt="Logo" />
      <LoginForm />
      <SocialLoginButton />
      <AuthFooterLink message="회원이 아니신가요?" linkText="회원가입하기" href="/auth/signup" />
    </div>
  )
}
