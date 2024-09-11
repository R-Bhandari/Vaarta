import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { FaPlus } from "react-icons/fa";
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
 
const NewDm = () => {
    const [openNewContactModel, setOpenNewContactModel] = useState(false)
  return (
    <>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <FaPlus 
                        className="text-neutral-400 font-light text-opacity-90 text-start hover:text-neutral-100 cursor-pointer transition-all duration-300"
                        onClick={() => setOpenNewContactModel=(true)} 
                    />
                </TooltipTrigger>
                <TooltipContent className="bg-[#1c1b1e] border-none mb-2 p-3 text-white">
                    Select New Contact
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <Dialog open={openNewContactModel} onOpenChange={setOpenNewContactModel}>
            <DialogContent className="bg-[#181920] border-none text-ehite w-[400px] h-[400px] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Please Select a Contact</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    
    </>
  )
}

export default NewDm