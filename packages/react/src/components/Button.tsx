import { ComponentProps } from 'react'

import { styled } from '../styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ButtonProps extends ComponentProps<typeof Button> {}

export const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  minWidth: 120,
  borderRadius: '$sm',
  padding: '0 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  textAlign: 'center',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        border: '2px solid $ignite500',
        color: '$ignite300',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          borderColor: '$gray200',
          backgroundColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

Button.displayName = 'Button'
