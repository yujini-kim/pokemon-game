'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { toast } from '@/hooks/use-toast'
import { auth } from '@/lib/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import FormInputField from './form-input-field'
import { loginFormSchema, LoginFormType } from './login.schema'

export default function LoginForm() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })
  const onSubmit = async (values: LoginFormType) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
      toast({ title: '로그인 성공' })
    } catch (error) {
      toast({ title: '로그인 실패 ', description: '다시 시도해주세요' })
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
        <Button className="mt-2">로그인</Button>
      </form>
    </Form>
  )
}
