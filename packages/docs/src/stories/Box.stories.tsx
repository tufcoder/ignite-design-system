import { Box, BoxProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Ignite-UI/Form/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} satisfies Meta<typeof Box>

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
