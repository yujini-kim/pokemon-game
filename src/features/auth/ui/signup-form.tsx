'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Spinner } from '@/components/ui/spinner'
import { auth } from '@/lib/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { signupFormSchema, SignupFormType } from '../model/signup.schema'
import { useAuthForm } from '../model/use-auth-form'
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
    redirectPath: '/',
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
