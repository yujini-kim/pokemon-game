'use client'

import { Button, Form, Spinner } from '@/components/ui'
import { auth } from '@/lib/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useAuthForm } from '../hooks/use-auth-form'
import { signupFormSchema, SignupFormType } from '../model/signup.schema'
import FormInputField from './form-input-field'

export default function SignupForm() {
  const form = useForm<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  })

  const { loading, handleSubmit } = useAuthForm<SignupFormType>({
    onSubmitHandler: (v) => createUserWithEmailAndPassword(auth, v.email, v.password),
    successMessage: '회원가입 성공',
    errorMessage: '회원가입 실패',
    redirectPath: '/auth/login',
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-2 px-10">
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
        <FormInputField
          control={form.control}
          name="confirmPassword"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <Button disabled={loading} className="mt-4">
          {loading ? <Spinner size="sm" /> : '회원가입'}
        </Button>
      </form>
    </Form>
  )
}
