import { ComponentProps } from 'react'

import { styled } from './styles'

export interface ButtonProps extends ComponentProps<typeof Button> {
  size: 'small' | 'big'
}

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  border: 0,
  borderRadius: '$md',
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})
