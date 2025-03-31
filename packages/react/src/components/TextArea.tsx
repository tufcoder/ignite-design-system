import { ComponentProps } from 'react'

import { styled } from '../styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

export const TextArea = styled('textarea', {
  boxSizing: 'border-box',
  minHeight: 80,
  borderRadius: '$sm',
  border: '2px solid $gray900',
  padding: '$3 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  backgroundColor: '$gray900',
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
