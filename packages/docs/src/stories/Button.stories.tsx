import { Button, ButtonProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}

// const meta: Meta<typeof Button> = {
//   component: Button,
// }

// export default meta
// type Story = StoryObj<typeof Button>

// export const FirstStory: Story = {
//   args: {
//     //👇 The args you need here will depend on your component
//   },
// }
