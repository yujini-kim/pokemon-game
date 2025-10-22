'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Spinner } from '@/components/ui/spinner'
import { toast } from '@/hooks/use-toast'
import { auth } from '@/lib/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginFormType } from '../model/login.schema'
import { signupFormSchema, SignupFormType } from '../model/signup.shema'
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

  const [loading, setLoading] = useState(false)

  const onSubmit = async (values: LoginFormType) => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password)
      toast({ title: '회원가입 성공' })
    } catch (error) {
      toast({ title: '회원가입 실패 ', description: '다시 시도해주세요' })
    } finally {
      setLoading(false)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 px-10">
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
        <Button disabled={loading} className="mt-2">
          {loading ? <Spinner size="sm" /> : '회원가입'}
        </Button>
      </form>
    </Form>
  )
}
