import { Heading, HeadingProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Ignite-UI/Typograph/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof Heading>

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
