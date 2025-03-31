import { User } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import {
  AvatarContainer,
  AvatarContainerFallback,
  AvatarContainerImage,
} from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AvatarProps
  extends ComponentProps<typeof AvatarContainerImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarContainerImage {...props} />
      <AvatarContainerFallback delayMs={600}>
        <User />
      </AvatarContainerFallback>
    </AvatarContainer>
  )
}
