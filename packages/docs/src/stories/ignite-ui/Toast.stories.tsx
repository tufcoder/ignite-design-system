import { ToastProvider, ToastViewport } from '@radix-ui/react-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@tufcoder-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Ignite-UI/Form/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {},
  decorators: [
    Story => {
      const [openToast, setOpenToast] = useState(false)

      return (
        <Box>
          <ToastProvider>
            <Button onClick={() => setOpenToast(true)}>Show Toast</Button>
            <Toast
              open={openToast}
              scheduleDate={new Date()}
              onClose={() => setOpenToast(false)}
            />
            <Story />
            <ToastViewport />
          </ToastProvider>
        </Box>
      )
    },
  ],
} satisfies Meta<typeof Toast>

type Story = StoryObj<ToastProps>

export const Primary: Story = {}
