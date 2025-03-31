import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@tufcoder-ignite-ui/react'

export default {
  title: 'Ignite-UI/Form/MultiStep',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    StoryObject => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {StoryObject()}
        </Box>
      )
    },
  ],
} satisfies Meta<typeof MultiStep>

type Story = StoryObj<MultiStepProps>

export const Primary: Story = {}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
