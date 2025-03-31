import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Ignite-UI/Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    StoryObject => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {StoryObject()}
        </Box>
      )
    },
  ],
} satisfies Meta<typeof TextArea>

type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
