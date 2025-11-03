'use client'

import { Button, Form, Spinner } from '@/components/ui'
import { auth } from '@/lib/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useAuthForm } from '../hooks/use-auth-form'
import { loginFormSchema, LoginFormType } from '../model/login.schema'
import FormInputField from './form-input-field'

export default function LoginForm() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const { loading, handleSubmit } = useAuthForm<LoginFormType>({
    onSubmitHandler: (v) => signInWithEmailAndPassword(auth, v.email, v.password),
    successMessage: '로그인 성공',
    errorMessage: '로그인 실패',
    redirectPath: '/',
  })
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex w-1/2 flex-col gap-2 px-10">
        <FormInputField
          control={form.control}
          name="email"
          label="이메일"
          type="email"
          placeholder="example@email.com"
        />
        <FormInputField
          control={form.control}
          name="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <Button disabled={loading} className="mt-4">
          {loading ? <Spinner size="lg" className="border-white border-t-transparent" /> : '로그인'}
        </Button>
      </form>
    </Form>
  )
}
