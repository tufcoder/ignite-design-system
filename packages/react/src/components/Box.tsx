import { ComponentProps } from 'react'

import { styled } from '../styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface BoxProps extends ComponentProps<typeof Box> {}

export const Box = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$6',
  backgroundColor: '$gray800',
})

Box.displayName = 'Box'
