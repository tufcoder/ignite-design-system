import { User } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import { AvatarFallback, AvatarImage, AvatarRoot } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  src?: string
  alt?: string
}

export function Avatar({ src, alt, ...props }: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage src={src} alt={alt} {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarRoot>
  )
}

Avatar.displayName = 'Avatar'
