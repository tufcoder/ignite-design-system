import { User } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import { Avatar_Fallback, Avatar_Image, Avatar_Root } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AvatarProps extends ComponentProps<typeof Avatar_Image> {}

export function Avatar(props: AvatarProps) {
  return (
    <Avatar_Root>
      <Avatar_Image {...props} />
      <Avatar_Fallback delayMs={600}>
        <User />
      </Avatar_Fallback>
    </Avatar_Root>
  )
}

Avatar.displayName = 'Avatar'
