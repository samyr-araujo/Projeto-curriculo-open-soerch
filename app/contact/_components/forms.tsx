'use client';

import { Button } from "@/components/ui/button"
import { FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"
import { useAxiosPost } from "@/public/api/conect/conect_api";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { useForm } from "react-hook-form"
import z from "zod"
import { Modal } from "./dialog";



//forms resolver ok...
//vai faltar so a api papai..

export const schema = z.object({
    name_user: z.string().min(2, "Name deve ser maior que 2 caracteres"),
    email: z.string().email("Email inválido"),
    content: z.string().min(10, "Mensagem deve ser maior que 10 caracteres")
})


type ContactFormData = z.infer<typeof schema>


export const ContactForm = () => {
       const    [open , onOpen] = useState<boolean>(false)

    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(schema)
    })
     const { post , loading } = useAxiosPost()

     const onSubmit = async (data: ContactFormData) => {
     const sucess =  await post("/createmessage", data)
       if(sucess){
        onOpen(true)
       }
     }
    return (
        <>
      <form className="space-y-4 w-[320px]" onSubmit={handleSubmit(onSubmit)}>

    <InputGroup className="  border border-blue-400 rounded-md focus-ring-blue-400 text-white" >
    <InputGroupInput className="h-12 text-base" placeholder="Digite seu nome"
    {...register("name_user")}

    >
        
    </InputGroupInput>
    {errors.name_user && <FieldError className="text-red-500">{errors.name_user.message}</FieldError>}
           </InputGroup>

            <InputGroup className="  border border-blue-400 rounded-md  w-full  focus-ring-blue-400 text-white" >
    <InputGroupInput className="h-12 text-base" placeholder="Digite seu email"
    {...register("email")}
    >
       
    </InputGroupInput>
     {errors.email && <FieldError className="text-red-500">{errors.email.message}</FieldError>}
           </InputGroup> 
            <InputGroup className=" border border-blue-400 rounded-md focus-ring-blue-400 text-white " >
    <InputGroupTextarea className=" h-[120px]  text-base" placeholder="Digite sua mensagem"
    {...register("content")}
    >
      
    </InputGroupTextarea>
      {errors.content && <FieldError className="text-red-500">{errors.content.message}</FieldError>}
           </InputGroup>

           <Button type="submit" disabled={isSubmitting} className=" w-full border border-blue-500 bg-transparent hover:bg-blue-600 text-blue-500 hover:text-white cursor-pointer  font-semibold py-2 px-4 rounded-md mx-auto">
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
           </Button>

        </form>
    
   <Modal open={open} onClose={()=> onOpen(false)}/>
</>
    )
}