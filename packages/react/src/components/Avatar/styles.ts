import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar, {
  display: 'inline-block',
  width: '$12',
  height: '$12',
  borderRadius: '$full',
  overflow: 'hidden',
})

export const AvatarContainerImage = styled(AvatarImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarContainerFallback = styled(AvatarFallback, {
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
