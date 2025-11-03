import z from 'zod'

export const signupFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요.' })
      .email({ message: '올바른 이메일 형식이 아닙니다.' }),
    displayName: z
      .string()
      .min(2, { message: '2자 이상 입력해 주세요' })
      .max(8, { message: '6자 이하로 입력해주세요' }),
    password: z.string().min(6, { message: '6자 이상 입력해주세요.' }),
    confirmPassword: z.string().min(6, { message: '6자 이상 입력해주세요.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

export type SignupFormType = z.infer<typeof signupFormSchema>
