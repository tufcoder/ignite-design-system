import { Button, ButtonProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Ignite-UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Enviar',
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Big: Story = {
  args: {
    size: 'big',
  },
}
