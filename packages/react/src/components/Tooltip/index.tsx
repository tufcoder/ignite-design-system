import { TooltipArrow, TooltipPortal } from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'

import { Text } from '../Text'
import { Tooltip_Content, Tooltip_Root, Tooltip_Trigger } from './styles'

export interface TooltipProps extends ComponentProps<typeof Tooltip_Root> {
  children?: ReactNode
  date?: Date
  available?: boolean
}

export function Tooltip({ children, date, available = false }: TooltipProps) {
  function formatDateAvailability(date: Date, available: boolean) {
    const dateString = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
    })
    const splitDate = dateString.split(' de ')
    const firstDatePart =
      splitDate[0].charAt(0).toUpperCase() + splitDate[0].slice(1)
    const secondDatePart =
      splitDate[1].charAt(0).toUpperCase() + splitDate[1].slice(1)
    const longDateText = `${firstDatePart} de ${secondDatePart} - ${available ? 'Disponível' : 'Indisponível'}`
    return longDateText
  }

  return (
    <Tooltip_Root>
      <Tooltip_Trigger asChild>{children}</Tooltip_Trigger>
      <TooltipPortal>
        <Tooltip_Content>
          <Text size="sm">
            {date && formatDateAvailability(new Date(date), available)}
          </Text>
          <TooltipArrow />
        </Tooltip_Content>
      </TooltipPortal>
    </Tooltip_Root>
  )
}

Tooltip.displayName = 'Tooltip'
