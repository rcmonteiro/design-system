import {
  Text,
  Tooltip,
  TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from '@rcmonteiro-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    content: 'A sample tooltip text',
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <TooltipTrigger>
            <Text as="span">Hover over me to trigger the tooltip</Text>
          </TooltipTrigger>
          {Story()}
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
