import { Check } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import { Checkbox_Indicator, Checkbox_Root } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CheckboxProps extends ComponentProps<typeof Checkbox_Root> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <Checkbox_Root {...props}>
      <Checkbox_Indicator asChild>
        <Check weight="bold" />
      </Checkbox_Indicator>
    </Checkbox_Root>
  )
}
