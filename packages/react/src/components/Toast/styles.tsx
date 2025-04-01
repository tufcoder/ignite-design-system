import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from '@radix-ui/react-toast'
import { keyframes } from '@stitches/react'

import { styled } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0)',
    opacity: 1,
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  to: {
    transform: 'translateX(100%)',
    opacity: 0,
  },
})

export const Toast_Root = styled(Toast, {
  position: 'fixed',
  bottom: '$4',
  right: '$4',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '$3 $5',
  borderRadius: 6,
  border: '1px solid $gray600',
  width: 360,
  backgroundColor: '$gray800',

  '&[data-state="open"]': {
    animation: `${slideIn} 0.3s ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 0.3s ease-in`,
  },
})

export const Toast_Title = styled(ToastTitle, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  lineHeight: '$base',
  color: '$white',
})

export const Toast_Description = styled(ToastDescription, {
  color: '$gray200',
})

export const Toast_Close = styled(ToastClose, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray200',
  cursor: 'pointer',
})
