import {
  Box,
  Button,
  Toast,
  ToastProps,
  ToastProvider,
} from '@rcmonteiro-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Toast title',
    content: 'A sample toast text',
  },
  decorators: [
    (_, { args }) => {
      const [toastIsOpen, setToastIsOpen] = useState(false)

      const handleToastOpen = (toastStatus: boolean) => {
        setToastIsOpen(toastStatus)
      }
      return (
        <ToastProvider>
          <Box style={{ height: '400px', position: 'relative' }}>
            <Button onClick={() => handleToastOpen(true)}>
              Click to trigger the toast
            </Button>
          </Box>
          <Toast {...args} open={toastIsOpen} onToastOpen={handleToastOpen} />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
