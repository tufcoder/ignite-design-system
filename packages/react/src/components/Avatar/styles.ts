import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarRoot = styled(Avatar.Root, {
  display: 'inline-block',
  width: '$16',
  height: '$16',
  borderRadius: '$full',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  color: '$gray800',
  backgroundColor: '$gray600',

  svg: {
    width: '$6',
    height: '$6',
  },
})
