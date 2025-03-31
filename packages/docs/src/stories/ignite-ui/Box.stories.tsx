import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@tufcoder-ignite-ui/react'

export default {
  title: 'Ignite-UI/Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} satisfies Meta<typeof Box>

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
