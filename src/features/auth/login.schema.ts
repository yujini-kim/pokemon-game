import z from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email({ message: '올바른 이메일 형식이 아닙니다.' }),

  password: z.string().min(6, { message: '6자 이상 입력해주세요.' }),
})

export type LoginFormType = z.infer<typeof loginFormSchema>
