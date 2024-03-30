import * as ToastRadix from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const viewportPadding = '1.5rem'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: `translateX(100%)`,
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(100%)`,
  },
})

export const ToastContainer = styled(ToastRadix.Root, {
  display: 'flex',
  width: '22.5rem',
  flexDirection: 'column',
  backgroundColor: '$gray800',
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  borderRadius: '$sm',
  padding: '$3 $4',
  gap: '$1',
  border: '1px solid $gray600',

  '&[data-state="open"]"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-state="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-state="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  strong: {
    fontSize: '$xl',
    color: '$gray100',
  },
})

export const ToastViewport = styled(ToastRadix.Viewport, {
  padding: viewportPadding,
  position: 'absolute',
  right: '0',
  bottom: '0',
})

export const ToastClose = styled(ToastRadix.Close, {
  all: 'unset',
  position: 'absolute',
  right: '2rem',
  top: '2rem',
  cursor: 'pointer',
})
