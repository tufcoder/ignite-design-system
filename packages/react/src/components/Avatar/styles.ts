import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const Avatar_Root = styled(Avatar, {
  display: 'inline-block',
  width: '$16',
  height: '$16',
  borderRadius: '$full',
  overflow: 'hidden',
})

export const Avatar_Image = styled(AvatarImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const Avatar_Fallback = styled(AvatarFallback, {
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
