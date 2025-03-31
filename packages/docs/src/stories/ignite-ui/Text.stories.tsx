import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Ignite-UI/Typograph/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: (
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam
        architecto suscipit recusandae cumque tenetur deserunt aperiam fugit
        magnam! Debitis inventore sed ex maxime repudiandae corporis veritatis
        adipisci, assumenda non?
      </span>
    ),
  },
} satisfies Meta<typeof Text>

type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Texto em negrito',
    as: 'strong',
  },
}
