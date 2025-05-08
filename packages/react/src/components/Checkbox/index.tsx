import { Check } from '@phosphor-icons/react'
import { ComponentProps, FC } from 'react'

import { CheckboxIndicator, CheckboxRoot } from './styles'

export interface CheckboxProps extends ComponentProps<typeof CheckboxRoot> {
  checked?: boolean | 'indeterminate'
  onCheckedChange?: (checked: boolean | 'indeterminate') => void
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onCheckedChange,
  ...props
}) => {
  return (
    <CheckboxRoot
      checked={checked}
      defaultChecked={props.defaultChecked || false}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}

Checkbox.displayName = 'Checkbox'
