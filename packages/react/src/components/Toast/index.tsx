import * as ToastRadix from '@radix-ui/react-toast'

import { X } from '@phosphor-icons/react'
import { ReactNode } from 'react'
import { ToastClose, ToastContainer, ToastViewport } from './styles'

export interface ToastProps {
  title?: string
  content: string
  open: boolean
  onToastOpen: (status: boolean) => void
}

export const Toast = ({ title, content, open, onToastOpen }: ToastProps) => {
  return (
    <ToastContainer open={open} onOpenChange={onToastOpen}>
      {!!title && (
        <ToastRadix.Title asChild>
          <strong>{title}</strong>
        </ToastRadix.Title>
      )}
      <ToastRadix.Description>{content}</ToastRadix.Description>
      <ToastClose asChild onClick={() => onToastOpen(false)}>
        <button>
          <X size={20} />
        </button>
      </ToastClose>
    </ToastContainer>
  )
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ToastRadix.Provider duration={500000}>
      {children}
      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
