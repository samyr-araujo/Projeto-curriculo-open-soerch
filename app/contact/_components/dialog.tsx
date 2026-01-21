import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

interface ModalProps {
  open: boolean
  onClose: (open: boolean) => void
}

export function Modal({ open, onClose }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="z-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mx-auto text-black">
            Mensagem enviada com sucesso!
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          Mensagem recebida, logo menos enviaremos um email confirmando o envio.
        </p>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="outline"> Cancelar</Button>
          </DialogClose>

          <Button variant="default" onClick={() => onClose(false)}>
            Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
