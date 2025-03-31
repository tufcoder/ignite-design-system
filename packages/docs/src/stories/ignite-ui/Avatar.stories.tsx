import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@tufcoder-ignite-ui/react'

export default {
  title: 'Ignite-UI/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/tufcoder.png',
    alt: 'Oswaldo Castro',
  },
} satisfies Meta<typeof Avatar>

type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: '#',
  },
}
