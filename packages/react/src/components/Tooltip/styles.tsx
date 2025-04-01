import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'

// import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

// const slideIn = keyframes({
//   from: {
//     transform: 'translateX(100%)',
//     opacity: 0,
//   },
//   to: {
//     transform: 'translateX(0)',
//     opacity: 1,
//   },
// })

// const slideOut = keyframes({
//   from: {
//     transform: 'translateX(0)',
//     opacity: 1,
//   },
//   to: {
//     transform: 'translateX(100%)',
//     opacity: 0,
//   },
// })

export const Tooltip_Root = styled(Tooltip, {})

export const Tooltip_Trigger = styled(TooltipTrigger, {})

export const Tooltip_Content = styled(TooltipContent, {
  borderRadius: 5,
  padding: '$3 $4',
  color: '$gray100',
  backgroundColor: '$gray900',
})
