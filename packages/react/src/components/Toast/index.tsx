import { X } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

import { Heading } from '../Heading'
import { Text } from '../Text'
import {
  Toast_Close,
  Toast_Description,
  Toast_Root,
  Toast_Title,
} from './styles'

export interface ToastProps extends ComponentProps<typeof Toast_Root> {
  scheduleDate?: Date
  open: boolean
  onClose: () => void
}

export function Toast({ scheduleDate, open = false, onClose }: ToastProps) {
  function formatLongDateTextBR(date: Date) {
    const dateString = date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      hour: 'numeric',
      hour12: false,
    })
    const splitDate = dateString.split(' de ')
    const firstDatePart =
      splitDate[0].charAt(0).toUpperCase() + splitDate[0].slice(1)
    const secondDatePart =
      splitDate[1].charAt(0).toUpperCase() + splitDate[1].slice(1)
    const longDateText = `${firstDatePart} de ${secondDatePart}h`
    return longDateText
  }

  return (
    <Toast_Root open={open} onOpenChange={onClose}>
      <Toast_Title asChild>
        <Heading size="sm">
          Agendamento realizado
          <Toast_Close onClick={onClose} aria-label="Fechar notificação">
            <X size={20} />
          </Toast_Close>
        </Heading>
      </Toast_Title>
      <Toast_Description asChild>
        {scheduleDate ? (
          <Text size="sm">{formatLongDateTextBR(scheduleDate)}</Text>
        ) : (
          <Text size="sm">Data não definida</Text>
        )}
      </Toast_Description>
    </Toast_Root>
  )
}

Toast.displayName = 'Toast'
