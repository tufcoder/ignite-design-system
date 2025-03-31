import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Ignite-UI/Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} satisfies Meta<typeof TextInput>

type TypeStory = StoryObj<TextInputProps>

export const Primary: TypeStory = {
  args: {
    placeholder: 'Type your email',
  },
}

export const WithPrefix: TypeStory = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: TypeStory = {
  args: {
    disabled: true,
  },
}
