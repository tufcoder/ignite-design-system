import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@tufcoder-ignite-ui/react'

export default {
  title: 'Ignite-UI/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    StoryObject => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          {StoryObject()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {}
