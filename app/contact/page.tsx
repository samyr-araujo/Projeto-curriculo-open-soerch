
import { Dialog } from "@radix-ui/react-dialog";
import { CardContact } from "./_components/card-concact_externs";
import { ContactForm } from "./_components/forms";




export default function ConcactComponentMain(){




    return (
        <>
        <div className="flex flex-col  justify-center items-center mx-auto mt-20 mb-20 px-4 md:px-0  max-w-5xl ">
         <h1 className=" text-3xl md:text-5xl font-bold mb-8 text-white">Entre em contato comigo </h1>
         <p className="text-gray-200 mx-auto mb-12 max-w-2xl text-center md:text-base">
            Atualmente estou aberto a novas oportunidades como Desenvolvedor. Minha caixa de entrada estará sempre disponivel!
         </p>
           <div className="flex flex-col  md:flex-row  gap-8 w-full justify-center items-center mx-auto ">
           
            <CardContact/>
            
            <ContactForm />            
            
            
            </div>



        </div>
        
        </>
    )
}