"use client"
import { AlertTriangle, ExternalLink } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"

interface TicketSoldOutModalProps {
  isOpen: boolean
  onClose: () => void
  showNumber?: string
}

export function TicketSoldOutModal({ isOpen, onClose, showNumber }: TicketSoldOutModalProps) {
  // WhatsApp number for management - replace with actual number
  const managementWhatsApp = "+14173426372"
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in tickets for Warren Zeiders${showNumber ? ` show on ${showNumber}` : ""}. Are there any available?`,
  )
  const whatsappLink = `https://wa.me/${managementWhatsApp}?text=${whatsappMessage}`

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Tickets Sold Out
          </DialogTitle>
          <DialogDescription>We're sorry, but tickets for this show are currently sold out.</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <p className="mb-4">
            For last-minute ticket availability or VIP access, please contact Warren's management team directly.
          </p>

          <a

            href={whatsappLink}
            onClick={onClose}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors"
          >
            Contact Management via WhatsApp
            <ExternalLink className="h-4 w-4" />
          </a>

          <div className="mt-6 text-sm text-stone-500 text-center">
            <p>Please note that contacting management does not guarantee ticket availability.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
