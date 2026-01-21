import EllipsisBlock from "@/components/mvpblocks/ellipsis-block";
import { InfoMe } from "./_components/info_me";
import StackPag from "./_components/contribuitions";







export default function StackPage() {



    return (
        <>
        <div className="flex  flex-col md:flex-row md:mt-10  md:ml-10 mx-auto justify-between   gap-10">
             <InfoMe/>
             <div className="mx-auto  mt-30 md:mt-0 h-full w-[500px] md:w-[700px]">
             <EllipsisBlock/>
             </div>
        
        </div>

        <div className="  flex flex-col justify-center items-center gap-6  mt-10"> 


        <h3 className="font-extrabold text-3xl mx-auto  text-white ">Projetos que ja fiz</h3>
        <StackPag/>
         </div>
        </>
    )
}