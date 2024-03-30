import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipArrow, TooltipBox } from './styles'

export interface TooltipProps {
  content: string
}

export const Tooltip = ({ content }: TooltipProps) => {
  return (
    <TooltipRadix.Portal>
      <TooltipRadix.Root>
        <TooltipBox>
          <TooltipArrow />
          {content}
        </TooltipBox>
      </TooltipRadix.Root>
    </TooltipRadix.Portal>
  )
}

export const TooltipProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>{children}</TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

export const TooltipTrigger = ({ children }: { children: ReactNode }) => {
  return <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
}

Tooltip.displayName = 'Tooltip'
