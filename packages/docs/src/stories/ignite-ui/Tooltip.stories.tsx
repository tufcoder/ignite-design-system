import { TooltipProvider } from '@radix-ui/react-tooltip'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@tufcoder-ignite-ui/react'

export default {
  title: 'Ignite-UI/Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    date: new Date(),
    available: true,
  },
  decorators: [
    Story => {
      return (
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      )
    },
  ],
} satisfies Meta<typeof Tooltip>

type Story = StoryObj<TooltipProps>

export const Available: Story = {
  render: args => (
    <Tooltip {...args}>
      <Button>{args.available ? 'Disponível' : 'Indisponível'}</Button>
    </Tooltip>
  ),
}

export const Unavailable: Story = {
  args: {
    available: false,
  },
  render: args => (
    <Tooltip {...args}>
      <Button>{args.available ? 'Disponível' : 'Indisponível'}</Button>
    </Tooltip>
  ),
}
