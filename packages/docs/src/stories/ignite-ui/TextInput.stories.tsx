import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@tufcoder-ignite-ui/react'

export default {
  title: 'Ignite-UI/Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    size: 'md',
    disabled: false,
  },
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          <Story />
        </Box>
      )
    },
  ],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof TextInput>

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your email',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
