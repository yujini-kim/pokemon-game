'use client'

import { Button, Form, Spinner } from '@/components/ui'
import { auth } from '@/lib/firebase'
import { useUserStore } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useAuthForm } from '../hooks/use-auth-form'
import { signupFormSchema, SignupFormType } from '../model/signup.schema'
import FormInputField from './form-input-field'

export default function SignupForm() {
  const form = useForm<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  })

  const { setUser } = useUserStore()

  const { loading, handleSubmit } = useAuthForm<SignupFormType>({
    onSubmitHandler: async (v) => {
      const userCredential = await createUserWithEmailAndPassword(auth, v.email, v.password)
      const user = userCredential.user
      await updateProfile(user, { displayName: v.displayName })
      setUser({
        ...user,
        displayName: v.displayName,
      })
    },
    successMessage: '회원가입 성공',
    errorMessage: '회원가입 실패',
    redirectPath: '/',
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-2 px-10">
        <FormInputField
          control={form.control}
          name="displayName"
          label="닉네임"
          type="text"
          placeholder="포켓몬 마스터"
        />
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
