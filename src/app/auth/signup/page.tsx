import { AuthFooterLink, SignupForm, SocialLoginButton } from '@/features/auth'

import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/img/singIcon.webp" width={160} height={140} alt="Logo" />
      <SignupForm />
      <SocialLoginButton />
      <AuthFooterLink message="이미 회원이신가요?" linkText="로그인하기" href="/auth/login" />
    </div>
  )
}
