import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes } from '@stitches/react'

import { styled } from '../../styles'

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$6',
  height: '$6',
  borderRadius: '$xs',
  border: '2px solid transparent',
  lineHeight: 0,
  backgroundColor: '$gray900',
  overflow: 'hidden',
  cursor: 'pointer',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.2s ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.2s ease-out`,
  },
})
