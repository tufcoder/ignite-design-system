import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

export default {
  title: 'Ignite-UI/Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
