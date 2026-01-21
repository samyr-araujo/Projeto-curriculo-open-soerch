"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup } from "@/components/ui/input-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schemaLoginTFT = z.object({
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
})

type LoginTFTType = z.infer<typeof schemaLoginTFT>

export default function ComponentLoginTFT() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTFTType>({
    resolver: zodResolver(schemaLoginTFT),
  })

  return (
    <div className="flex  flex-col justify-center items-center min-h-screen gap-1 ">
      <div className="flex flex-col text-foreground  gap-1 mb-4">
          <h3 className="text-2xl  font-black    text-center">
          Insira seu login
        </h3>
        <p className="text-sm text-center">Entre e confira nosso controle de financas</p>

      </div>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-6 w-80"
      >
      
        {/* EMAIL */}
        <Field>
          <FieldLabel>Email</FieldLabel>
          <InputGroup>
            <Input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </InputGroup>
          {errors.email && (
            <FieldError className="border-">{errors.email.message}</FieldError>
          )}
        </Field>

        {/* PASSWORD */}
        <Field>
          <FieldLabel>Senha</FieldLabel>
          <InputGroup>
            <Input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </InputGroup>
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>
     <div className="flex flex-col justify-center items-center space-y-0.5">
           <Button type="submit" className="w-full">
          Entrar
        </Button> 
        <p className="text-sm text-blue-600 hover:text-blue-800 hover:scale-105" onClick={()=> null}> Cadastrar-se</p>
     </div>
        

      </form>
    </div>
  )
}
